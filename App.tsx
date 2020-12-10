import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PointziReact from 'pointzi-react'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  PointziReact.ready(()=>{
    PointziReact.register("PZDynamic_bison", 'pointzi-react-web_' + new Date().toISOString());
  })

  if (!isLoadingComplete) {
    return null;
  } else {
    console.log('render app.tsx!');

    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
