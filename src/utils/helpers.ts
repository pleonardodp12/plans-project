export const formatCurrencyBRL = (currency: string) => {
  const floatNumber = Number(currency?.replace(',', '.'));
  const formated = floatNumber.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formated;
};
