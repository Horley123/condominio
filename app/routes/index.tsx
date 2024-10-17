import React from 'react';
// import { useAuth } from "~/hooks/useAuth";
import AuthRoutes from './auth.routes';
import {AppRoutes} from './app.routes';
import {NavigationContainer} from '@react-navigation/native';

const Routes = () => {
  // const { userData } = useAuth();
  // return !userData.id ? <AuthRoutes /> : <AppRoutes />;

  return true ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
