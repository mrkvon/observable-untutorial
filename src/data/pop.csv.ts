import fs from 'node:fs/promises'
const file = await fs.readFile('./src/data/gapminder/pop.csv', 'utf8')
process.stdout.write(file)
