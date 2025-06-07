export default async function fetchConvert(value, type) {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${type}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  const typeUpper = type.toUpperCase();
  const currentValue = +json[`${typeUpper}BRL`].bid;
  const total = (value * currentValue).toFixed(2);
  return {
    total,
    currentValue,
  };
}
