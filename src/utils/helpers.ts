export const formatCurrencyBRL = (currency: string) => {
  const floatNumber = Number(currency?.replace(',', '.'));
  const formated = floatNumber.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formated;
};

export const cpfMask = (cpf: string) => {
  let valueCpf = cpf;
  if (cpf.length <= 11) {
    valueCpf = valueCpf.replace(/\D/g, '');
    valueCpf = valueCpf.replace(/(\d{3})(\d)/, '$1.$2');
    valueCpf = valueCpf.replace(/(\d{3})(\d)/, '$1.$2');
    valueCpf = valueCpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return valueCpf;
  }
  return valueCpf;
};
