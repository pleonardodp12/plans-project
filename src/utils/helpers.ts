export const formatStringToFloat = (string: string) => {
  const floatNumber = Number(string?.replace(',', '.'));
  return floatNumber;
};

export const formatCurrencyBRL = (currency: string) => {
  const floatNumber = formatStringToFloat(currency);
  const formated = floatNumber.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formated;
};

export const getPlanName = (name: string) => {
  const formatedName = name.split('_')[0];
  return formatedName;
};
