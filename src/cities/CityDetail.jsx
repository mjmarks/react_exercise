import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledRowDetail } from '../styles/styles';

const {
  headerCountry,
  headerLikes,
  headerLongitude,
  headerLatitude,
  unavailable,
} = require('../copy.json');

const CityDetail = ({
  details: {
    name: cityName,
    country,
    details: { likes },
    location: { lat, lng },
  },
  handleClose,
}) => (
  <StyledRowDetail data-testid='cityDetail_box'>
    <div onClick={handleClose}>
      <strong>&#x24E7;</strong>
    </div>
    <div>
      <strong>{cityName}</strong>
    </div>
    <div>
      {headerCountry}: {country}
    </div>
    <div>
      {headerLikes}: {likes}
    </div>
    <div>
      {headerLatitude}: {lat}
    </div>
    <div>
      {headerLongitude}: {lng}
    </div>
  </StyledRowDetail>
);

CityDetail.defaultProps = {
  details: {
    country: unavailable,
    name: unavailable,
    location: {
      lat: unavailable,
      lng: unavailable,
    },
    details: {
      likes: 0,
    },
    id: 0,
  },
};

// Another approach would be the use of TypeScript
CityDetail.propTypes = {
  details: PropTypes.shape({
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
  }),
};

const mapStateToProps = (state, { selectedId }) => ({
  details: state.cities.data[selectedId],
});

export default connect(mapStateToProps)(CityDetail);
