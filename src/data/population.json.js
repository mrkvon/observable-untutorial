import { getWorldBankData } from './getWorldBankData.js'
const data = await getWorldBankData('SP.POP.TOTL')
process.stdout.write(JSON.stringify(data))
