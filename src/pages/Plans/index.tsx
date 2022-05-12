import { useParams } from 'react-router-dom';
import { FormPlans } from './components/FormPlans';

export function Plans() {
  const { sku } = useParams();

  if (!sku) return null;

  return <FormPlans sku={sku} />;
}
