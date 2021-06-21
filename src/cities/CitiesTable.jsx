import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledFlexContainer,
  StyledTable,
  VerticalBarrier,
} from '../styles/styles';
import CityDetail from './CityDetail';

const { headerName, headerCountry, headerLikes } = require('../copy.json');

const CitiesTable = ({ cities }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [display, setDisplay] = useState(false);

  const handleOpen = (id) => {
    setSelectedId(id);
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
    setSelectedId(null);
  };

  return (
    cities.length > 0 && (
      <StyledFlexContainer>
        <StyledTable data-testid='citiesTable_table'>
          <thead>
            <tr>
              <th scope='col'>
                <strong>{headerName}</strong>
              </th>
              <th scope='col'>
                <strong>{headerCountry}</strong>
              </th>
              <th scope='col'>
                <strong>{headerLikes}</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {cities.map(
              ({ id, name: cityName, country, details: { likes } }) => (
                <tr key={id} onClick={() => handleOpen(id)}>
                  <td>{cityName}</td>
                  <td>{country}</td>
                  <td>{likes}</td>
                </tr>
              )
            )}
          </tbody>
        </StyledTable>
        {display && (
          <>
            <VerticalBarrier />
            <CityDetail selectedId={selectedId} handleClose={handleClose} />
          </>
        )}
      </StyledFlexContainer>
    )
  );
};

CitiesTable.defaultProps = {
  cities: [],
};

// Another approach would be the use of TypeScript
CitiesTable.propTypes = {
  cities: PropTypes.array,
};

const mapStateToProps = (state, { displayIds }) => ({
  cities: displayIds.map((id) => state.cities.data[id]),
});

export default connect(mapStateToProps)(CitiesTable);
