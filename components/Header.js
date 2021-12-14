import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';
import SideNav from '../components/Sidenav';


export default function Header( props ) {

    const {type, navigation, back, image, title, openSidebar} = props;

    const OpenSidebar = (val) => {
        openSidebar(val);
    }

    if (type === 'home') {

        return (
            
            <View  style={tailwind('w-full h-1/3 bg-transparent')}>
            <ImageBackground 
            source={image} 
            style={tailwind('absolute w-full h-full rounded-lg')}  resizeMode="stretch" >
            <View  style={tailwind('px-8 pt-10 w-full h-full')}>
                <View  style={tailwind('relative w-full h-full')}>
                    {/* Header */}
                    <View style={tailwind('flex flex-row justify-between items-center')}>
                        <Pressable 
                            onPress={() => OpenSidebar(true)}>
                            <MyIcons color="white" name='Dash' width="20" height="20" />
                        </Pressable>
                        { !back ?
                        <Pressable 
                            onPress={(props) => { navigation.goBack(null) }} >
                            <MyIcons color="white" name='angle-left' width="20" height="20" />
                        </Pressable> :
                        <Pressable 
                            onPress={() => navigation.navigate('Home')}>
                            <MyIcons color="white" name='Bell' width="20" height="20" />
                        </Pressable>
                        }
                    </View>
                    <Text style={tailwind('text-4xl text-white absolute bottom-5')}>{title}</Text>                    
                </View>
            </View>
            </ImageBackground> 
            </View>
        );
    }
    else if (type === 'details') {
        
        return (
           <View style={tailwind('flex flex-row justify-between items-center')}>
                <Pressable 
                    onPress={() => navigation.navigate('Home')}>
                    <MyIcons name='Dash' width="20" height="20" />
                </Pressable>
                <Pressable 
                    onPress={() => navigation.navigate('Home')}>
                    <MyIcons name='Bell' width="20" height="20" />
                </Pressable>
            </View>
        );

    }

}; 



const styles = StyleSheet.create({
  textBlack: {
    color: '#1F2123',
  },
});