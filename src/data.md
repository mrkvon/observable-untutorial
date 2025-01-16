---
toc: false
title: data
---

```ts
const gdp = FileAttachment('./data/gdp.json').json()
const population = FileAttachment('./data/population.json').json()
const populationRaw = FileAttachment('./data/populationRaw.json').json()
const lifeExpectancy = FileAttachment('./data/lifeExpectancy.json').json()
const lifeExpectancyRaw = FileAttachment('./data/lifeExpectancyRaw.json').json()
const gdpPerCapita = FileAttachment('./data/gdpPerCapita.json').json()
const gdpPerCapitaRaw = FileAttachment('./data/gdpPerCapitaRaw.json').json()
```

## Population

```ts
display(population)
display(populationRaw)
```

```ts
display(Plot.plot({
  marks: [
    Plot.lineY(populationRaw, {x: 'date', y: 'value', stroke: 'countryiso3code'})
  ]
})
)
```

## Life expectancy

```ts
display(lifeExpectancyRaw)
```
```ts
display(Plot.plot({
  title: 'Life Expectancy',
  grid: true,
  //color: {legend: true},
  marks: [
    Plot.lineY(lifeExpectancyRaw, {x: 'date', y: 'value', stroke: 'countryiso3code'}),
  ]
}))
```

## GDP per capita

```ts
display(gdpPerCapita)
display(gdpPerCapitaRaw)
```

```ts
display(Plot.plot({
  title: 'GDP per capita',
  grid: true,
  y: { label: 'gdp per capita' },
  //color: {legend: true},
  marks: [
    Plot.lineY(gdpPerCapitaRaw, {x: 'date', y: 'value', stroke: 'countryiso3code'}),
  ]
}))
```
