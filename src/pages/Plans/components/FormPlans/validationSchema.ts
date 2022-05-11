import * as Yup from 'yup';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { ErrorMessages } from '../../../../utils/constants';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(ErrorMessages.fieldRequired),
  email: Yup.string()
    .email(ErrorMessages.invalidEmail)
    .required(ErrorMessages.fieldRequired),
  cpf: Yup.string()
    .required(ErrorMessages.fieldRequired)
    .min(11, ErrorMessages.cpfMinCharacters)
    .test('cpf', ErrorMessages.invalidCpf, (value) =>
      cpfValidator.isValid(value || ''),
    ),
  birthDay: Yup.string().required(ErrorMessages.fieldRequired),
  phone: Yup.string().required(ErrorMessages.fieldRequired),
});
