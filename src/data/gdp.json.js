import { getWorldBankData } from "./getWorldBankData.js"
const data = await getWorldBankData('NY.GDP.MKTP.KD')
process.stdout.write(JSON.stringify(data))
