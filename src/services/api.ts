import axios from 'axios';
import { IPlatform } from '../components/PlatformCards/PlatformCard';

export const BASE_URL = `http://private-59658d-celulardireto2017.apiary-mock.com`;

interface IResponsePlatform {
  plataformas: IPlatform[];
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
    const { data } = await axios.get(`${BASE_URL}/planos/${sku}`);
    return data.planos;
  } catch (error) {
    return error;
  }
};
