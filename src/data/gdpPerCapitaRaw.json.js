import { getRawWorldBankData } from "./getWorldBankData.js";
const data = await getRawWorldBankData('NY.GDP.PCAP.KD')
process.stdout.write(JSON.stringify(data))

