import React, { useRef, useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Button, Text, View, Pressable, Dimensions  } from 'react-native';
import tailwind from 'tailwind-rn';
import BottomMenu from '../components/BottomMenu';
import MyIcons from '../components/myIcons';
import Btn from '../components/Btn';
import Category_menu from '../components/category_menu';
import SideNav from '../components/Sidenav';
import Header from '../components/Header';
import Story from '../components/story';





const Share = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 300,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}




export default function StoryDetails({ navigation, route }) {

  const { storyTitle } = route.params;
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [openShare, setOpenShare] = React.useState(false); 
  const [title, setTitle] = React.useState('Title');
 
   React.useEffect(() => {
        setTitle(storyTitle);
     }, []);

  return (
    <View style={styles.container}>

        <View  style={tailwind('relative w-full h-full')}>
          <ImageBackground 
            source={require('../assets/background-images/sign.png')} 
            style={tailwind('absolute w-full h-full')}  resizeMode="stretch" >
            
            <Header type='home' title={title} image={require('../assets/background-images/car.png')} navigation={navigation} openSidebar={setOpenSidebar}/>

            <View style={tailwind('flex flex-row justify-between items-center px-8 mt-5')} >
              <View style={tailwind('flex flex-col')} >
                <Text style={tailwind('text-lg')}>By Author</Text>
                <Text style={tailwind('text-sm')}>Date</Text>
              </View>
              <View style={tailwind('flex flex-row')} >
              { !openShare ?
                <Pressable 
                  onPress={() => setOpenShare(true)} >
                  <MyIcons name='share' width="12" height="13" />
                </Pressable> : null}
                { openShare ? 
                <Share style={tailwind('ml-2 flex flex-row')} >
                  <Pressable 
                    onPress={() => setOpenShare(true)} >
                    <MyIcons name='facebook' width="12" height="13" />
                  </Pressable>
                  <Pressable style={tailwind('ml-2')}
                    onPress={() => setOpenShare(true)} >
                    <MyIcons name='email' width="12" height="13" />
                  </Pressable>
                  <Pressable style={tailwind('ml-2')}
                    onPress={() => setOpenShare(true)} >
                    <MyIcons name='whatsapp' width="12" height="13" />
                  </Pressable>
                  <Pressable style={tailwind('ml-2')}
                    onPress={() => setOpenShare(true)} >
                    <MyIcons name='twitter' width="12" height="13" />
                  </Pressable>
                </Share> : null}
              </View>
            </View>
            <View style={tailwind('mt-8 px-8')}>
              <Text style={tailwind('text-base text-justify')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</Text>
            </View>
            <View style={tailwind('flex flex-row justify-between items-center px-8 mt-5')} >
              <Text style={tailwind('text-lg')}>By Author</Text>
              <Text style={tailwind('text-sm')}>Date</Text>
            </View>

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