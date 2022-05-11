import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Input, PrimaryButton } from '../../../../components';
import api from '../../../../services/api';
import { formatCurrencyBRL } from '../../../../utils/helpers';
import { FormContainer, GroupInputs, GroupPlans, BackButton } from './styles';

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

        <GroupPlans>
          {plans.map((plan) => (
            <li
              aria-hidden="true"
              key={plan.sku}
              onClick={() => handleSelectItem(plan.sku)}
              className={selectedItems.includes(plan.sku) ? 'selected' : ''}
            >
              <span>{getPlanName(plan.sku)}</span>
              <span>{plan.franquia}</span>
              <span>{formatCurrencyBRL(plan.valor)}</span>
            </li>
          ))}
        </GroupPlans>
      </fieldset>
      <PrimaryButton type="submit" onClick={() => console.log('submit')}>
        Comprar
      </PrimaryButton>
    </FormContainer>
  );
}
