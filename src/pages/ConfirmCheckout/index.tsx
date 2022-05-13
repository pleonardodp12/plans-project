import { useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { Navigate, useParams } from 'react-router-dom';
import { BackButton, PrimaryButton } from '../../components';
import { IPlan } from '../../context/checkoutContext';
import { useInfoCheckout } from '../../hooks/useInfoCheckout';
import { theme } from '../../theme';
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
  SucessState,
} from './styles';

export function ConfirmCheckout() {
  const { plan, personalData } = useInfoCheckout();
  const { sku } = useParams();
  const [success, setSuccess] = useState(false);
  const [selectedInstallment] = useState<number>(
    plan.aparelho?.numeroParcelas || 1,
  );

  if (!plan.sku) return <Navigate replace to="/" />;

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

  const handleSuccessComponent = () => {
    setSuccess(true);
  };

  const hasDevice = plan.aparelho;

  const hasInstallment = plan.aparelho && plan.aparelho?.numeroParcelas > 1;

  return (
    <ContainerCheckout>
      <BackButton backTo={`/plans/${sku}`} />
      {success ? (
        <SucessState>
          <GiConfirmed color={theme.colors.primary} size={60} />
        </SucessState>
      ) : (
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

          <PrimaryButton onClick={handleSuccessComponent}>
            Confirmar
          </PrimaryButton>
        </InfoContainer>
      )}
    </ContainerCheckout>
  );
}
