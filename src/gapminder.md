---
toc: false
title: Gapminder
---

# Wealth of Nations

---

## Life expectancy

```ts
const lex = FileAttachment('./data/lex.csv').csv()
```
```ts
display(lex)
```

## Population

```ts
const pop = FileAttachment('./data/pop.csv').csv()
```
```ts
display(pop)
```

## GDP per capita

```ts
const gdp = FileAttachment('./data/gdp_pcap.csv').csv()
```
```ts
display(gdp)
```

```ts
import {formatValue} from './data/gapminder/helpers.js'

const combined = pop.map(row => {
  const {country, ...years} = row
  const lexCountryRow = lex.find(l => l.country === country)
  const gdpCountryRow = gdp.find(l => l.country === country)
  return Object.entries(years).map(([year, population]) => ({country, year: +year, population: formatValue(population), lex: +lexCountryRow?.[year], gdp: formatValue(gdpCountryRow?.[year])}))
}).flat()//.filter(a => ['India', 'China'].includes(a.country))

display(combined)
```

```ts
const minYear = Math.min(...combined.map(c => +c.year))
const maxYear = Math.max(...combined.map(c => +c.year))

const minLex = Math.floor(Math.min(...combined.map(c => +c.lex).filter(a => !!a)))
const maxLex = Math.ceil(Math.max(...combined.map(c => +c.lex).filter(a => !!a)))

const minGdp = Math.floor(Math.min(...combined.map(c => +c.gdp).filter(a => !!a)))
const maxGdp = Math.ceil(Math.max(...combined.map(c => +c.gdp).filter(a => !!a)))
const maxPopulation = Math.ceil(Math.max(...combined.map(c => +c.population).filter(a => !!a)))

display([minYear, maxYear])
display([minLex, maxLex])
display([minGdp, maxGdp])
display(maxPopulation)
```

```ts
const year = view(Inputs.range([minYear, maxYear], {step: 1, value: new Date().getUTCFullYear()}))
```

```ts
display(year)
const dataYear = combined.filter(a => +a.year === +year)

display(dataYear);

display(Plot.plot({
  x: {type: 'log', domain: [minGdp, maxGdp]},
  y: {domain: [minLex, maxLex]},
  r: {type: 'sqrt', domain: [0, maxPopulation], range: [0, 30]},
  grid: true,
  marks: [
    Plot.dot(dataYear, Plot.pointer({x: "gdp", y: "lex", fill: "country", r: 'population', tip: 'xy'})),
    Plot.dot(dataYear, {x: 'gdp', y: 'lex', stroke: 'country', r: 'population' }),
  ]
}));
```