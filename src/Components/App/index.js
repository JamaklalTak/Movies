import React from 'react';

import Header from '../Header';
import Routes from '../../routes';

import AppStyledContainer from './App.styled';

function App() {
  return (
    <>
    <Header />
    <AppStyledContainer>
      <Routes />
    </AppStyledContainer>
    </>
  );
}

export default App;
