import Clock from 'components/Clock';
import Weather from 'components/Weather';

import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { View, Text, StatusBar } from 'react-native';

import './global.css';

export default function App() {

  // Force orientation to landscape
  async function changeOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  };

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  

  function refreshTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  React.useEffect(() => {
    refreshTime();
  }, []);

  
  return (
    <View className='bg-background flex-1 items-center justify-center'>
      <StatusBar hidden />
      <Clock />
      <Weather />
    </View>
  );
}
