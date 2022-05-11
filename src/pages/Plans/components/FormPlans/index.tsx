import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../components';
import { FormContainer, GroupInputs, BackButton } from './styles';

export function FormPlans() {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <BackButton type="button" onClick={() => navigate('/')}>
        <IoArrowBackOutline size={24} />
      </BackButton>
      <fieldset>
        <legend>Dados pessoais</legend>
        <GroupInputs>
          <Input label="Nome" isInvalid error="teste" placeholder="Nome" />
          <Input
            label="E-mail"
            isInvalid={false}
            error="teste"
            placeholder="E-mail"
          />
        </GroupInputs>
        <GroupInputs>
          <Input
            label="Nascimento"
            isInvalid={false}
            error="teste"
            placeholder="__/__/____"
          />
          <Input
            label="CPF"
            isInvalid={false}
            error="teste"
            placeholder="___.___.___-__"
          />
        </GroupInputs>
        <GroupInputs>
          <Input
            label="telefone"
            isInvalid={false}
            error="teste"
            placeholder="( __ ) _____-____"
          />
        </GroupInputs>
      </fieldset>

      <fieldset>
        <legend>Planos</legend>
      </fieldset>
    </FormContainer>
  );
}
