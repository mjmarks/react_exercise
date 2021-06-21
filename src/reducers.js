const usCities = require('./us-cities.json');

const defaultStructure = {
  cities: {
    data: usCities.reduce((acc, city) => {
      const generatedId = Math.floor(Math.random() * Date.now());

      acc[generatedId] = { ...city, id: generatedId };

      return acc;
    }, {}),
  },
};

export const citiesReducer = (state = defaultStructure, action) => {
  switch (action.type) {
    // Update accordingly
    // case ADD_CITY
    default:
      return state;
  }
};
