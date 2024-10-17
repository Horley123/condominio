import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppTabRoutes from './app.tab.routes';

const App = createStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer independent={true}>
      <App.Navigator initialRouteName="AppTabRoutes">
        <App.Screen
          name="AppTabRoutes"
          component={AppTabRoutes}
          options={{
            headerShown: false,
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};
