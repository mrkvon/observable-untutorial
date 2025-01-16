export const formatValue = (value) => {
  if (!value)
    return NaN;
  if (value.endsWith("k"))
    return Number(value.slice(0, -1)) * 1e3;
  else if (value.endsWith("M"))
    return Number(value.slice(0, -1)) * 1e3 * 1e3;
  else if (value.endsWith("B"))
    return Number(value.slice(0, -1)) * 1e3 * 1e3 * 1e3;
  else
    return +value;
};
