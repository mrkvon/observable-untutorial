import { getWorldBankData } from "./getWorldBankData.js";
import { Indicator } from "./indicators.js";
const data = await getWorldBankData(Indicator.LifeExpectancy);
process.stdout.write(JSON.stringify(data));
