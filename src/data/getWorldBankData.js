export const getWorldBankData = async (indicator) => {
  const rawData = await (
    await fetch(
      `https://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&per_page=32000`,
    )
  ).json();
  const data = {};

  rawData[1].forEach((row) => {
    data[row.countryiso3code] ??= [];
    data[row.countryiso3code].push({ year: +row.date, value: +row.value });
  });

  return data;
};

export const getRawWorldBankData = async (indicator) =>
  (
    await (
      await fetch(
        `https://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&per_page=32000`,
      )
    ).json()
  )[1];
