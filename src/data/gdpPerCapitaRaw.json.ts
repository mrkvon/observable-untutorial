import { getRawWorldBankData } from './getWorldBankData.js'
import { Indicator } from './indicators.js'
const data = await getRawWorldBankData(Indicator.GdpPerCapita)
process.stdout.write(JSON.stringify(data))
