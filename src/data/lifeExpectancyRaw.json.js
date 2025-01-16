import { getRawWorldBankData } from "./getWorldBankData.js"
const data = await getRawWorldBankData('SP.DYN.LE00.IN')
process.stdout.write(JSON.stringify(data))
