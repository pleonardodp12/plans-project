import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BackButton, PrimaryButton } from '../../components';
import { IPlan } from '../../context/checkoutContext';
import { useInfoCheckout } from '../../hooks/useInfoCheckout';
import {
  formatCurrencyBRL,
  formatStringToFloat,
  getPlanName,
} from '../../utils/helpers';
import {
  ContainerCheckout,
  InfoContainer,
  InfoGroup,
  Title,
  Info,
} from './styles';

export function ConfirmCheckout() {
  const navigate = useNavigate();
  const { sku } = useParams();
  const { plan, personalData } = useInfoCheckout();
  const [selectedInstallment] = useState<number>(
    plan.aparelho?.numeroParcelas || 1,
  );

  if (!plan) {
    navigate('/');
    return null;
  }

  const getTotalPrice = (planSelected: IPlan) => {
    const planPrice = planSelected.valor;

    if (planSelected.aparelho) {
      const devicePrice = formatStringToFloat(planSelected.aparelho?.valor);
      const sumPrices = formatStringToFloat(planPrice) + devicePrice;
      return formatCurrencyBRL(`${sumPrices}`);
    }

    return formatCurrencyBRL(planPrice);
  };

  const priceInstallment = (planSelected: IPlan) => {
    const { aparelho } = planSelected;
    if (!aparelho) return ``;
    const deviceValue = aparelho?.valor;
    const priceDividedInstallment =
      formatStringToFloat(deviceValue) / selectedInstallment;
    return formatCurrencyBRL(`${priceDividedInstallment}`);
  };

  const hasDevice = plan.aparelho;

  const hasInstallment = plan.aparelho && plan.aparelho?.numeroParcelas > 1;

  return (
    <ContainerCheckout>
      <BackButton backTo={`/plans/${sku}`} />

      <InfoContainer>
        <InfoGroup>
          <Title>Nome:</Title>
          <Info>{personalData.name}</Info>
        </InfoGroup>

        <InfoGroup>
          <Title>Cpf:</Title>
          <Info>{personalData.cpf}</Info>
        </InfoGroup>

        <InfoGroup>
          <Title>Plano selecionado:</Title>
          <Info>
            {getPlanName(plan.sku)} - {plan.franquia}{' '}
            {hasDevice && <>+ {plan.aparelho?.nome}</>}
          </Info>
        </InfoGroup>

        <InfoGroup>
          <Title>Preço total:</Title>
          <Info>À vista {getTotalPrice(plan)}</Info>
          {hasDevice && hasInstallment && (
            <>
              <h3>Ou</h3>
              <Title>Preço total:</Title>
              <Info>
                {formatCurrencyBRL(plan.valor)} +
                {hasInstallment && <> {selectedInstallment} x </>}
                {priceInstallment(plan)}
              </Info>
            </>
          )}
        </InfoGroup>

        <PrimaryButton>Confirmar</PrimaryButton>
      </InfoContainer>
    </ContainerCheckout>
  );
}
