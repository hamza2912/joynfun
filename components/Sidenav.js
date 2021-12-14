import React, { useRef, useEffect } from 'react';
import { Image, Animated, ImageBackground, StyleSheet, Text, View, Pressable, Dimensions  } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';
import Btn from './Btn';
import Category_menu from './category_menu';

const SideBar = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: Dimensions.get('window').width,
          duration: 300,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          width: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  
  const CategoryMenu = (props) => {
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
  
  const Gallery = (props) => {
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

export default function SideNav( props ) {

    const { navigation, openSidebar } = props;

    const OpenSidebar = (val) => {
      openSidebar(val);
    }

    const [openCategories, setOpenCategories] = React.useState(false);
    const [openGallery, setOpenGallery] = React.useState(false);

    return (
        <SideBar style={tailwind('absolute h-full bg-white px-6 pt-10 pb-8')}> 
            <View style={tailwind('flex flex-row justify-between items-center px-2')}>
                <Pressable 
                      onPress={() => OpenSidebar(false)}>
                      <MyIcons name='Dash' width="20" height="20" />
                </Pressable>
                <Pressable 
                    onPress={() => OpenSidebar(false)}>
                    <MyIcons name='close' width="20" height="20" />
                </Pressable>
            </View>
            <Pressable
                onPress={() => setOpenCategories( !openCategories )}>
              <View style={tailwind('flex flex-row items-center justify-between mt-20 px-2')}>
                  <View style={tailwind('flex flex-row items-center')}>
                    <MyIcons name='category' width="20" height="20" />
                    <Text style={tailwind('text-lg ml-6')}>Category</Text>
                  </View>
                { !openCategories ?
                  <MyIcons name='right-angle' width="20" height="20" /> : <MyIcons name='down-angle' width="20" height="20" /> }
              </View>
            </Pressable>
            { openCategories ?
            <CategoryMenu style={tailwind('flex flex-row justify-between flex-wrap mt-5')}>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Stories" navigation={navigation} url="Stories" icon="stories" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Story Challenge" navigation={navigation} url="Challenges" icon="challenge" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Cow Corner" navigation={navigation} url="Cow" icon="cow" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Reflection" navigation={navigation} url="Reflection" icon="reflection" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Letters to Editors" navigation={navigation} url="Letters" icon="letters" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Medical Info" navigation={navigation} url="Medical" icon="medical" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Comments" navigation={navigation} url="Comments" icon="comments" />
              </View>
              <View style={[tailwind('m-2'), styles.wGrid]}>
                <Category_menu name="Contribution" navigation={navigation} url="Contribution" icon="contribution" />
              </View>
            </CategoryMenu> : null }
            <Pressable 
                onPress={() => setOpenGallery(!openGallery)}>
              <View style={tailwind('flex flex-row items-center justify-between mt-8 px-2')}>
                <View style={tailwind('flex flex-row items-center')}>
                  <MyIcons name='gallery' width="20" height="20" />
                  <Text style={tailwind('text-lg ml-6')}>Gallery</Text>
                </View>
                { !openGallery ?
                  <MyIcons name='right-angle' width="20" height="20" /> : <MyIcons name='down-angle' width="20" height="20" /> }
              </View>
            </Pressable>
            { openGallery ?
            <Gallery style={tailwind('flex flex-row justify-between flex-wrap mt-5 px-2')}>
              <View style={tailwind('w-full')}>
                <Category_menu name="Drawings" navigation={navigation} url="Drawings" icon="stories" />
              </View>
              <View style={tailwind('w-full mt-2')}>
                <Category_menu name="Pictures" navigation={navigation} url="Pictures" icon="stories" />
              </View>
            </Gallery> : null }
            <Pressable 
                onPress={() => console.log("Hello")}>
              <View style={tailwind('flex flex-row items-center justify-between mt-8 px-2')}>
                <View style={tailwind('flex flex-row items-center')}>
                  <MyIcons name='logout' width="20" height="20" />
                  <Text style={tailwind('text-lg ml-6')}>Logout</Text>
                </View>
              </View>
            </Pressable>  
            <View style={[tailwind('w-full mt-10 rounded-lg px-5 py-4 flex flex-col px-4'), styles.shadow]}>
              <Text style={tailwind('flex flex-row text-base font-medium')}>PRO TIP</Text>
              <Text style={tailwind('flex flex-row text-base font-medium')}>Contact Support</Text>
              <Text style={tailwind('flex flex-row text-sm mt-5')}>If you have any problems or questions, feel free to reach out to us.</Text>
              <Btn type="primary" classes={tailwind('w-full py-2 mt-5')} text="Contact Us" navigation={navigation} url="SignOptions"  />
            </View>
          </SideBar>
    );
    
    
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    wGrid: {
      width: '45%',
    }
  });

