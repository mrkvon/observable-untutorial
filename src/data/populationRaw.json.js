import { getRawWorldBankData } from "./getWorldBankData.js"
const data = await getRawWorldBankData('SP.POP.TOTL')
process.stdout.write(JSON.stringify(data))
