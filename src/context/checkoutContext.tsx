import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

interface IProps {
  children: ReactNode;
}

export interface IPlan {
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

export interface IFormPlan {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDay: string;
}

interface IcheckoutContext {
  plan: IPlan;
  personalData: IFormPlan;
  setPlan: Dispatch<SetStateAction<IPlan>>;
  setPersonalData: Dispatch<SetStateAction<IFormPlan>>;
}

export const CheckoutContext = createContext({} as IcheckoutContext);

export function CheckoutProvider(props: IProps) {
  const { children } = props;
  const [plan, setPlan] = useState<IPlan>({} as IPlan);
  const [personalData, setPersonalData] = useState<IFormPlan>({} as IFormPlan);

  const value = useMemo(
    () => ({
      plan,
      personalData,
      setPlan,
      setPersonalData,
    }),
    [plan, personalData],
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
