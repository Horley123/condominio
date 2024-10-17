import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '@/pages/Home';

const MenuStack = createStackNavigator();

export const MenuRoutes = () => {
  return (
    <MenuStack.Navigator initialRouteName="Home">
      <MenuStack.Screen
        name="Home"
        component={Home}
        // options={{
        //   headerShown: true,
        //   header: props => HeaderHome(props),
        // }}
      />
    </MenuStack.Navigator>
  );
};
