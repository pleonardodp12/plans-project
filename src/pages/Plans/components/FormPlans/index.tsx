import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Input, PrimaryButton } from '../../../../components';
import api from '../../../../services/api';
import { formatCurrencyBRL } from '../../../../utils/helpers';
import { validationSchema } from './validationSchema';
import {
  FormContainer,
  GroupInputs,
  GroupPlans,
  BackButton,
  Value,
} from './styles';
import { useForm } from '../../../../hooks/useForm';

interface IProps {
  sku: string;
}
interface IPlan {
  sku: string;
  franquia: string;
  valor: string;
  aparelho?: {
    nome: string;
    valor: string;
    numeroParcelas: number;
    valorParcela: string;
  };
  ativo: boolean;
}

interface IFormPlan {
  name: string;
  date: string;
  email: string;
  cpf: string;
  phone: string;
  birthDay: string;
}

const initialValues: IFormPlan = {
  name: '',
  email: '',
  date: '',
  cpf: '',
  phone: '',
  birthDay: '',
};

export function FormPlans(props: IProps) {
  const { sku } = props;
  const navigate = useNavigate();
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    api.get(`planos/${sku}`).then((response) => {
      setPlans(response.data.planos);
    });
  }, []);

  const getPlanName = (name: string) => {
    const formatedName = name.split('_')[0];
    return formatedName;
  };

  const onSubmit = async (values: IFormPlan) => {
    // fazer validaçaõ para selecionar planos
    console.log(values);
  };

  const { errors, fieldProps, handleSubmit, hasError, setValue, values } =
    useForm<IFormPlan>({
      initialValues,
      onSubmit,
      validationSchema,
    });

  const handleSelectItem = (id: string) => {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <BackButton type="button" onClick={() => navigate('/')}>
        <IoArrowBackOutline size={24} />
      </BackButton>
      <fieldset>
        <legend>Dados pessoais</legend>
        <GroupInputs>
          <Input
            {...fieldProps('name')}
            label="Nome"
            isInvalid={hasError('name')}
            error={errors.name}
            placeholder="Nome"
          />
          <Input
            {...fieldProps('email')}
            label="E-mail"
            isInvalid={hasError('email')}
            error={errors.email}
            placeholder="E-mail"
          />
        </GroupInputs>
        <GroupInputs>
          <Input
            {...fieldProps('birthDay')}
            label="Nascimento"
            isInvalid={hasError('birthDay')}
            error={errors.birthDay}
            placeholder="__/__/____"
          />
          <Input
            {...fieldProps('cpf')}
            label="CPF"
            isInvalid={hasError('cpf')}
            error={errors.cpf}
            placeholder="___.___.___-__"
          />
        </GroupInputs>
        <GroupInputs>
          <Input
            {...fieldProps('phone')}
            label="telefone"
            isInvalid={hasError('phone')}
            error={errors.phone}
            placeholder="( __ ) _____-____"
          />
        </GroupInputs>
      </fieldset>

      <fieldset>
        <legend>Planos {sku}</legend>

        <GroupPlans>
          {plans.map((plan) => (
            <li
              aria-hidden="true"
              key={plan.sku}
              onClick={() => handleSelectItem(plan.sku)}
              className={selectedItems.includes(plan.sku) ? 'selected' : ''}
            >
              <span>
                {getPlanName(plan.sku)} - {plan.franquia}
              </span>
              <span />
              <Value>{formatCurrencyBRL(plan.valor)}</Value>
            </li>
          ))}
        </GroupPlans>
      </fieldset>
      <PrimaryButton type="submit">Comprar</PrimaryButton>
    </FormContainer>
  );
}
