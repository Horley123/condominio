import React from 'react';

import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppProvider from './hooks';
import Routes from './routes';
import AppView from './AppView';

export default function app({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaProvider style={{justifyContent: 'center'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppProvider>
            <AppView />
          </AppProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
