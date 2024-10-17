import React from 'react';
import {Linking, StatusBar} from 'react-native';
import Routes from './routes';
function AppView(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Routes />
    </>
  );
}

export default AppView;
