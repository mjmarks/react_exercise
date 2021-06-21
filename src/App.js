import React from 'react';
import { BaseContainer } from './styles/styles';
import CitiesSearch from './cities/CitiesSearch';

const { applicationTitle } = require('./copy.json');

const App = () => (
  <BaseContainer>
    <header>
      <h1>{applicationTitle}</h1>
    </header>
    <main>
      <section>
        <CitiesSearch />
      </section>
    </main>
  </BaseContainer>
);

export default App;
