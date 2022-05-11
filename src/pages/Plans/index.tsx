import { useParams } from 'react-router-dom';
import { FormPlans } from './components/FormPlans';

export function Plans() {
  const params = useParams();
  return <FormPlans />;
}
