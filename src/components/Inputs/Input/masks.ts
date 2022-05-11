export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14;
  let { value } = e.currentTarget;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    e.currentTarget.value = value;
  }
  return e;
};

export const date = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 10;
  let { value } = e.currentTarget;
  if (
    !value.match(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/)
  ) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    e.currentTarget.value = value;
  }

  return e;
};

export const phone = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14;
  let { value } = e.currentTarget;
  if (!value.match(/^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/)) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    e.currentTarget.value = value;
  }

  return e;
};
