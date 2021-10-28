import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';
import Svg, { Path } from 'react-native-svg';

export default function BottomMenu( props ) {

    const { navigation } = props;
    
    return (
        <View  style={tailwind('w-full flex flex-row justify-between absolute bottom-0')}>
            <Pressable 
                onPress={() => navigation.navigate('Details')}>
                <MyIcons name='home' width="20" height="20" />
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Details')}>
                <MyIcons name='Write' width="20" height="20" />
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Details')}>
                <MyIcons name='Settings' width="21" height="20" />
            </Pressable>
        </View>
    );
    
};

