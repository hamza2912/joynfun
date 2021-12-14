import React, { useRef, useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View, Pressable, Dimensions  } from 'react-native';
import tailwind from 'tailwind-rn';
import BottomMenu from '../components/BottomMenu';
import MyIcons from '../components/myIcons';
import Btn from '../components/Btn';
import SideNav from '../components/Sidenav';
import Header from '../components/Header';
import Story from '../components/story';



export default function Challenges({ navigation }) {

  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <View style={styles.container}>

        <View  style={tailwind('relative w-full h-full')}>
          <ImageBackground 
            source={require('../assets/background-images/sign.png')} 
            style={tailwind('absolute w-full h-full')}  resizeMode="stretch" >
            
            <Header type='home' image={require('../assets/background-images/home.png')} title="Story Challenge" openSidebar={setOpenSidebar}/>

          



          

            <BottomMenu  navigation={navigation} />
          </ImageBackground> 
        </View>
        
        { openSidebar ? 
          <SideNav openSidebar={setOpenSidebar} navigation={navigation} /> : null }

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgOrange: {
    backgroundColor: '#FE5B24',
  },
  wGrid: {
    width: '45%',
  }
});


{/* <Pressable  style={[tailwind('w-full h-48 flex-col items-start rounded-lg overflow-hidden'), styles.bgOrange]}
                  onPress={() => setOpenSidebar(false)}>
                    <ImageBackground 
                      source={require('../assets/background-images/car.png')} 
                      style={tailwind('absolute w-full h-full px-4 py-4')}  resizeMode="stretch" >
                      <Text style={tailwind('text-sm font-medium text-white')}>My New Car</Text>
                      <Text style={tailwind('text-xs text-white mt-2')}>Hussain Ismail Zaidi</Text>
                    </ImageBackground>
                </Pressable> */}