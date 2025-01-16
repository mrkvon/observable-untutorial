import { getWorldBankData } from "./getWorldBankData.js"
import { Indicator } from "./indicators.js"
const data = await getWorldBankData(Indicator.GdpPerCapita)
process.stdout.write(JSON.stringify(data))
