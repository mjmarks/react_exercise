import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledInput, VerticalSpacer } from '../styles/styles';
import CitiesTable from './CitiesTable';

const { inputPlaceholder } = require('../copy.json');

const CitiesSearch = ({ allCities }) => {
  const [displayIds, setDisplayIds] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    const reducedCityIds = allCities.reduce((acc, city) => {
      if (city.name.toLowerCase().includes(value.toLowerCase()))
        acc.push(city.id);

      return acc;
    }, []);

    setDisplayIds(reducedCityIds);
  };

  return (
    <>
      <StyledInput
        data-testid='citiesSearch_input'
        onChange={handleChange}
        placeholder={inputPlaceholder}
        type='text'
      />
      <VerticalSpacer />
      <CitiesTable displayIds={displayIds} />
    </>
  );
};

CitiesSearch.defaultProps = {
  allCities: [],
};

// Another approach would be the use of TypeScript
CitiesSearch.propTypes = {
  allCities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
      details: PropTypes.shape({
        likes: PropTypes.number,
      }),
      id: PropTypes.number,
    })
  ),
};

const mapStateToProps = (state) => ({
  allCities: Object.values(state.cities.data),
});

export default connect(mapStateToProps)(CitiesSearch);
