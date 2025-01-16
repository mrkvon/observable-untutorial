import fs from "node:fs/promises";
const file = await fs.readFile("./src/data/gapminder/lex.csv", "utf8");
process.stdout.write(file);
