import { getWorldBankData } from "./getWorldBankData.js"
const data = await getWorldBankData('SP.DYN.LE00.IN')
process.stdout.write(JSON.stringify(data))
