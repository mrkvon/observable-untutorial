---
toc: false
title: Wealth and Health of Nations
---

# Wealth and Health of Nations

BASED ON FREE [DATA](https://www.gapminder.org/data/) FROM [GAPMINDER.ORG](https://www.gapminder.org), CC-BY LICENSE

[source code](https://github.com/mrkvon/observable-untutorial)

---

```ts
const lex = FileAttachment('./data/lex.csv').csv()
const pop = FileAttachment('./data/pop.csv').csv()
const gdp = FileAttachment('./data/gdp_pcap.csv').csv()
```

```ts
import { formatValue } from './data/helpers.js'

const combined = pop
  .map(row => {
    const { country, ...years } = row
    const lexCountryRow = lex.find(l => l.country === country)
    const gdpCountryRow = gdp.find(l => l.country === country)
    return Object.entries(years).map(([year, population]) => ({
      country,
      year: +year,
      population: formatValue(population),
      lex: +lexCountryRow?.[year],
      gdp: formatValue(gdpCountryRow?.[year]),
    }))
  })
  .flat() //.filter(a => ['India', 'China'].includes(a.country))
```

```ts
const minYear = Math.min(...combined.map(c => +c.year))
const maxYear = Math.max(...combined.map(c => +c.year))

const minLex = Math.floor(
  Math.min(...combined.map(c => +c.lex).filter(a => !!a)),
)
const maxLex = Math.ceil(
  Math.max(...combined.map(c => +c.lex).filter(a => !!a)),
)

const minGdp = Math.floor(
  Math.min(...combined.map(c => +c.gdp).filter(a => !!a)),
)
const maxGdp = Math.ceil(
  Math.max(...combined.map(c => +c.gdp).filter(a => !!a)),
)
const maxPopulation = Math.ceil(
  Math.max(...combined.map(c => +c.population).filter(a => !!a)),
)
```

```ts
const year = view(
  Inputs.range([minYear, maxYear], {
    step: 1,
    value: new Date().getUTCFullYear(),
  }),
)
```

```ts
display(year)
const dataYear = combined.filter(a => +a.year === +year)

display(
  Plot.plot({
    x: { type: 'log', domain: [minGdp, maxGdp], label: 'GDP per capita' },
    y: { domain: [minLex, maxLex], label: 'Life expectancy' },
    r: { type: 'sqrt', domain: [0, maxPopulation], range: [0, 30] }, // I don't think sqrt works here.
    // TODO Population should be proportional to the area of the circle, not the diameter.
    grid: true,
    marks: [
      Plot.dot(
        dataYear,
        Plot.pointer({
          x: 'gdp',
          y: 'lex',
          fill: 'country',
          r: 'population',
          tip: 'xy',
        }),
      ),
      Plot.dot(dataYear, {
        x: 'gdp',
        y: 'lex',
        stroke: 'country',
        r: 'population',
      }),
    ],
  }),
)
```

## Data

### All data

```ts
display(combined)
```

### Data for ${year}

```ts
display(dataYear)
```

### Life expectancy

```ts
display(lex)
```

### Population

```ts
display(pop)
```

### GDP per capita

```ts
display(gdp)
```
