import { useParams } from 'react-router-dom';
import { FormPlans } from './components/FormPlans';

export function Plans() {
  const { sku } = useParams();
  // fazer estado vazio
  if (!sku) return null;
  return <FormPlans sku={sku} />;
}
