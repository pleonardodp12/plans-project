import { screen, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Home } from '.';
import { theme } from '../../theme';
import { BASE_URL, getPlatforms } from '../../services/api';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Home', () => {
  console.error = jest.fn();

  const mockRender = () =>
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

  it('should show Header text: Encontre o plano perfeito para você!', () => {
    mockRender();
    expect(
      screen.getByText('Encontre o plano perfeito para você!'),
    ).toBeInTheDocument();

    screen.debug();
  });

  it('should show platforms on request fetchPlatforms', async () => {
    mockRender();

    const data = [
      {
        sku: 'TBT01',
        nome: 'Tablet',
        descricao: 'Chip para navegar à vontade',
      },
      {
        sku: 'CPT02',
        nome: 'Computador',
        descricao: 'Seu computador|Sempre conectado',
      },
      {
        sku: 'WF03',
        nome: 'WI-FI',
        descricao: 'Internet WI-FI para|casa toda',
      },
    ];

    const response = { data };
    mockedAxios.get.mockResolvedValue(response);

    return getPlatforms().then((resp) => {
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/plataformas`);
      expect(resp).toEqual(data);
    });
  });
});
