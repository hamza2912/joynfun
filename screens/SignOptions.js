import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Btn from '../components/Btn';


export default function SignOptions({ navigation }) {

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background-images/sign.png')} 
        style={tailwind('absolute w-full h-full')}  resizeMode="stretch" >
        <View  style={tailwind('w-full h-full flex justify-center items-center px-5')}>
          <View style={tailwind('flex flex-row w-full')}>
            <Btn type="primary" classes={tailwind('w-1/2 px-3 py-5 z-10')} text="Register" navigation={navigation} url="SignOptions"  />
            <Btn type="secondary" classes={tailwind('w-3/5 px-3 py-5 absolute right-5')} text="Sign In" navigation={navigation} url="SignOptions"  />
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
