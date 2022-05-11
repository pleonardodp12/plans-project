import { FormEvent, InputHTMLAttributes, useCallback } from 'react';
import { ErrorMessage } from '../..';
import { cpf, date, phone } from './masks';
import { InputWrapper, Label, InputBase } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid: boolean;
  error?: string;
  mask?: string;
}

export function Input(props: IProps) {
  const { label, isInvalid, error, mask, ...rest } = props;

  const handleKeyUp = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (mask === 'date') {
        date(e);
      }
      if (mask === 'phone') {
        phone(e);
      }
      if (mask === 'cpf') {
        cpf(e);
      }
    },
    [mask],
  );

  return (
    <InputWrapper>
      <Label isInvalid={isInvalid}>{label}</Label>
      <InputBase isInvalid={isInvalid} onKeyUp={handleKeyUp} {...rest} />
      {isInvalid ? <ErrorMessage>{error}</ErrorMessage> : null}
    </InputWrapper>
  );
}

Input.defaultProps = {
  error: '',
  mask: '',
};
