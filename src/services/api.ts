import axios from 'axios';
import { IPlatform } from '../components/PlatformCards/PlatformCard';
import { IPlan } from '../context/checkoutContext';

export const BASE_URL = `http://private-59658d-celulardireto2017.apiary-mock.com`;

interface IResponsePlatform {
  plataformas: IPlatform[];
}

interface IResponsePlan {
  planos: IPlan[];
}

export const getPlatforms = async () => {
  try {
    const { data } = await axios.get<IResponsePlatform>(
      `${BASE_URL}/plataformas`,
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getPlans = async (sku: string) => {
  try {
    const { data } = await axios.get<IResponsePlan>(
      `${BASE_URL}/planos/${sku}`,
    );
    const activePlans = data.planos.filter((plano) => Boolean(plano.ativo));
    return activePlans;
  } catch (error) {
    return error;
  }
};
