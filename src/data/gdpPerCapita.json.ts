import { getWorldBankData } from "./getWorldBankData.js"
const data = await getWorldBankData('NY.GDP.PCAP.KD')
process.stdout.write(JSON.stringify(data))
