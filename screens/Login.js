import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, TextInput, Text, Image, Pressable  } from 'react-native';
import tailwind from 'tailwind-rn';
import Btn from '../components/Btn';
import MyIcons from '../components/myIcons';


export default function Login({ navigation }) {

  const [username, onChangeUsername] = React.useState('');
  const [pasword, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background-images/login.png')} 
        style={tailwind('absolute w-full h-full')}  resizeMode="stretch" >
        <View  style={tailwind('w-full h-full pt-64 px-5')}>
          <TextInput style={tailwind('w-full rounded-2xl border border-red-400 pl-4 py-6 text-base text-gray-400')} onChangeText={onChangeUsername} value={username} placeholder="Enter username" />
          <TextInput style={tailwind('mt-4 w-full rounded-2xl border border-red-400 pl-4 py-6 text-base text-gray-400')} onChangeText={onChangePassword} value={pasword} secureTextEntry={true} placeholder="Password" />
          <View style={tailwind('w-full flex items-end mt-4')} >
            <Text style={tailwind('text-gray-500 text-sm font-semibold')}>Recover your password</Text>
          </View>
          <View style={tailwind('mt-6 flex flex-row w-full')}>
            <Btn type="primary" classes={tailwind('w-full px-3 py-4 z-10')} text="Sign In" navigation={navigation} url="SignOptions"  />
          </View>
          <Text style={tailwind('text-center text-gray-500 text-sm font-semibold mt-4')}>or continue with</Text>
          <View style={tailwind('mt-6 flex flex-row justify-between w-full px-10')}>
            <Pressable
                onPress={() => navigation.navigate("Login")}>
                <Image
                  style={tailwind('w-14 h-14')}
                  resizeMode="contain"
                  source={require('../assets/icons/google.svg')}
                  />
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate("Login")}>
                <Image
                  style={tailwind('w-14 h-14')}
                  resizeMode="contain"
                  source={require('../assets/icons/iphone.svg')}
                  />
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate("Login")}>
                <Image
                  style={tailwind('w-14 h-14')}
                  resizeMode="contain"
                  source={require('../assets/icons/facebook.svg')}
                  />
            </Pressable>
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
