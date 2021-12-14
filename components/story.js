import React from 'react';
import { Pressable, StyleSheet, Text, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';


export default function Story( props ) {

    const {title, author, image, navigation, url, params} = props;


    return (
        <Pressable  style={tailwind('w-full h-48 flex-col items-start rounded-lg overflow-hidden')}
            onPress={() => navigation.navigate(url, params)}>
            <ImageBackground 
                source={image} 
                style={tailwind('absolute w-full h-full px-4 py-4')}  resizeMode="stretch" >
                <Text style={tailwind('text-sm font-medium text-white')}>{title}</Text>
                <Text style={tailwind('text-xs text-white mt-2')}>{author}</Text>
            </ImageBackground>
        </Pressable>
    );
};



const styles = StyleSheet.create({
  bgOrange: {
    backgroundColor: '#FE5B24',
  },
});
