import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { BackButtonWrapper } from './styles';

interface IProps {
  backTo: string;
}

export function BackButton(props: IProps) {
  const { backTo } = props;
  const navigate = useNavigate();
  return (
    <BackButtonWrapper type="button" onClick={() => navigate(backTo)}>
      <IoArrowBackOutline size={24} />
    </BackButtonWrapper>
  );
}
