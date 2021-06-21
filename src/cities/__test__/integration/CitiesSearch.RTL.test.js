import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { citiesReducer } from '../../../reducers';
import CitiesSearch from '../../CitiesSearch';

const copy = require('../../../copy.json');

// Application-wide utilities can be established accordingly
const utilityRenderer = (ui, { ...renderOptions } = {}) => {
  const mockStore = createStore(citiesReducer);
  const UtilityWrapper = ({ children }) => (
    <Provider store={mockStore}>{children}</Provider>
  );

  return render(ui, { wrapper: UtilityWrapper, ...renderOptions });
};

describe('CitiesSearch integration', () => {
  it('should successfully engage in a city search', async () => {
    const { queryByTestId } = utilityRenderer(<CitiesSearch />);

    const input = queryByTestId('citiesSearch_input');
    expect(input).toBeInTheDocument();

    let table = queryByTestId('citiesTable_table');
    expect(table).not.toBeInTheDocument();

    let box = queryByTestId('cityDetail_box');
    expect(box).not.toBeInTheDocument();

    userEvent.type(input, 'shington park');
    table = queryByTestId('citiesTable_table');
    expect(table).toBeInTheDocument();
    // Column headers && 2 search results ('Washington Park')
    expect(table.rows.length).toBe(3);
    // Headers
    expect(
      within(table.rows[0]).getByText(copy.headerName)
    ).toBeInTheDocument();
    expect(
      within(table.rows[0]).getByText(copy.headerCountry)
    ).toBeInTheDocument();
    expect(
      within(table.rows[0]).getByText(copy.headerLikes)
    ).toBeInTheDocument();
    // 1st search result
    expect(
      within(table.rows[1]).getByText('Washington Park')
    ).toBeInTheDocument();
    expect(within(table.rows[1]).getByText('US')).toBeInTheDocument();
    expect(within(table.rows[1]).getByText('0')).toBeInTheDocument();
    // 2nd search result
    expect(
      within(table.rows[2]).getByText('Washington Park')
    ).toBeInTheDocument();
    expect(within(table.rows[2]).getByText('US')).toBeInTheDocument();
    expect(within(table.rows[2]).getByText('0')).toBeInTheDocument();

    userEvent.click(table.rows[1]);
    box = queryByTestId('cityDetail_box');
    expect(box).toBeInTheDocument();
    // City detail
    expect(within(box).getByText('Washington Park')).toBeInTheDocument();
    expect(within(box).getByText('Country: US')).toBeInTheDocument();
    expect(within(box).getByText('Likes: 0')).toBeInTheDocument();
    expect(within(box).getByText('Latitude: 26.13259')).toBeInTheDocument();
    expect(within(box).getByText('Longitude: -80.18116')).toBeInTheDocument();
  });
});
