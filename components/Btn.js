import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';
import Svg, { Path } from 'react-native-svg';

export default function Btn( props ) {

    const { navigation, url, text, type, classes } = props;

    if( type == "primary"){

        return (
            <Pressable style={[classes, tailwind('rounded-2xl justify-center items-center'),styles.bgOrange]}
                onPress={() => navigation.navigate(url)}>
                <Text style={tailwind('text-white text-sm font-semibold')}>{text}</Text>
            </Pressable>
        );

    } else if( type == "secondary" ){

        return (
            <Pressable style={[classes, tailwind('rounded-2xl justify-center items-center'),styles.bgGray]}
                onPress={() => navigation.navigate(url)}>
                <Text style={tailwind('text-black text-sm font-semibold')}>{text}</Text>
            </Pressable>
        );
        
    }
    
    
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textBlack: {
      color: '#1F2123',
    },
    bgOrange: {
      backgroundColor: '#FE5B24',
    },
    bgGray: {
        backgroundColor: '#F8F8F8',
      },
  });

