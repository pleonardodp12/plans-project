import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
  BackButton,
  ErrorMessage,
  Input,
  Loading,
  NotFound,
  PrimaryButton,
} from '../../../../components';
import { getPlans } from '../../../../services/api';
import { formatCurrencyBRL, getPlanName } from '../../../../utils/helpers';
import { validationSchema } from './validationSchema';
import { FormContainer, GroupInputs, GroupPlans, Value } from './styles';
import { useForm } from '../../../../hooks/useForm';
import { ErrorMessages } from '../../../../utils/constants';
import { IFormPlan, IPlan } from '../../../../context/checkoutContext';
import { useInfoCheckout } from '../../../../hooks/useInfoCheckout';

const BAD_REQUEST_CODE = 'ERR_BAD_REQUEST';

interface IProps {
  sku: string;
}

const initialValues: IFormPlan = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  birthDay: '',
};

export function FormPlans(props: IProps) {
  const { sku } = props;
  const navigate = useNavigate();
  const { setPersonalData, setPlan } = useInfoCheckout();
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [planError, setPlanError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [plasRequired, setPlansRequired] = useState({
    hasError: false,
    messageError: ErrorMessages.plansRequired,
  });
  const [selectedPlan, setSelectedPlan] = useState<IPlan>({} as IPlan);

  const fetchPlans = async (skuValue: string) => {
    const response = await getPlans(skuValue);
    setIsLoading(false);
    if (response.code === BAD_REQUEST_CODE) {
      return setPlanError(true);
    }
    return setPlans(response);
  };

  useEffect(() => {
    fetchPlans(sku);
  }, [sku]);

  const getDeviceInformation = (plan: IPlan) => {
    if (!plan.aparelho) return null;
    const { nome, valor, numeroParcelas } = plan.aparelho;

    const hasInstallments = numeroParcelas > 1;

    if (hasInstallments) {
      return `+ ${nome} (${formatCurrencyBRL(
        valor,
      )}) em até ${numeroParcelas}x SEM JUROS`;
    }
    return `+ ${nome} (${formatCurrencyBRL(valor)})`;
  };

  const hasSelectedPlan = Object.values(selectedPlan).length;

  const onSubmit = async (values: IFormPlan) => {
    if (!hasSelectedPlan) {
      return setPlansRequired((prevValue) => ({
        ...prevValue,
        hasError: true,
      }));
    }

    setPlan(selectedPlan);
    setPersonalData(values);
    return navigate(`/plans/${sku}/checkout`);
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormPlan>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSelectItem = (plan: IPlan) => {
    setSelectedPlan(plan);
    setPlansRequired((prevValue) => ({ ...prevValue, hasError: false }));
  };

  if (isLoading) return <Loading />;

  if (planError) return <NotFound />;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <BackButton backTo="/" />
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
            mask="date"
            error={errors.birthDay}
            placeholder="__/__/____"
          />
          <Input
            {...fieldProps('cpf')}
            label="CPF"
            mask="cpf"
            isInvalid={hasError('cpf')}
            error={errors.cpf}
            placeholder="___.___.___-__"
          />
        </GroupInputs>
        <GroupInputs>
          <Input
            {...fieldProps('phone')}
            label="telefone"
            mask="phone"
            isInvalid={hasError('phone')}
            error={errors.phone}
            placeholder="( __ ) _________"
          />
        </GroupInputs>
      </fieldset>

      <fieldset>
        {plasRequired.hasError && (
          <ErrorMessage>{plasRequired.messageError}</ErrorMessage>
        )}
        <legend>Planos {sku}</legend>

        <GroupPlans>
          {plans?.map((plan) => (
            <li
              aria-hidden="true"
              key={plan.sku}
              onClick={() => handleSelectItem(plan)}
              className={selectedPlan.sku === plan.sku ? 'selected' : ''}
            >
              <strong>{getPlanName(plan.sku)}</strong>

              <span>{plan.franquia}</span>
              <Value>{formatCurrencyBRL(plan.valor)}</Value>
              {getDeviceInformation(plan)}
            </li>
          ))}
        </GroupPlans>
      </fieldset>
      <PrimaryButton type="submit">Comprar</PrimaryButton>
    </FormContainer>
  );
}
