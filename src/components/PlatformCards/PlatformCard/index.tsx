import { FaTabletAlt, FaWifi } from 'react-icons/fa';
import { GrPersonalComputer } from 'react-icons/gr';

import { CardWrapper, Title, Description } from './styles';

import { PrimaryButton } from '../../PrimaryButton';

export interface IPlatform {
  descricao: string;
  nome: string;
  sku: string;
}

interface IProps {
  platform: IPlatform;
}

export function PlatformCard(props: IProps) {
  const { platform } = props;

  const icons: any = {
    TBT01: <FaTabletAlt size={32} />,
    CPT02: <GrPersonalComputer size={32} />,
    WF03: <FaWifi size={32} />,
  };

  return (
    <CardWrapper>
      {icons[platform.sku]}
      <Title>{platform.nome}</Title>
      <Description>{platform.descricao}</Description>
      <PrimaryButton>Ver planos</PrimaryButton>
    </CardWrapper>
  );
}
