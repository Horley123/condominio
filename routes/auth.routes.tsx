import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '@/pages/Auth/Login';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

function AuthRoutes(): JSX.Element {
  return (
    <NavigationContainer independent={true}>
      <Auth.Navigator initialRouteName="Login">
        <Auth.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Auth.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;
