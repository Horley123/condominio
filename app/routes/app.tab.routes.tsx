import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuRoutes} from './TabRoutes/menu.routes';

const AppTabRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeRoutes"
      // screenOptions={{
      //   headerShown: false,
      //   tabBarHideOnKeyboard: false,
      //   tabBarShowLabel: false,
      //   tabBarStyle: {
      //     height: 80,
      //     backgroundColor: colors.white,
      //   },
      //   tabBarBadgeStyle: {
      //     backgroundColor: colors.green200,
      //     left: Platform.select({ios: 10, android: 10}),
      //     top: Platform.select({ios: 10, android: 15}),
      //   },

      //   tabBarActiveTintColor: colors.green200,
      //   tabBarInactiveTintColor: colors.gray200,
      // }}
    >
      <Tab.Screen
        name="MenuRoutes"
        component={MenuRoutes}
        options={() => ({})}
      />
    </Tab.Navigator>
  );
};

export default AppTabRoutes;
