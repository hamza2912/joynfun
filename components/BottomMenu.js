import React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';
import Svg, { Path } from 'react-native-svg';

export default function BottomMenu( props ) {

    const { navigation } = props;
    
    return (
        <View  style={styles.fixed}>
            <Pressable 
                onPress={() => navigation.navigate('Home')}>
                <MyIcons name='home' width="20" height="20" />
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Home')}>
                <MyIcons name='Write' width="20" height="20" />
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Home')}>
                <MyIcons name='Settings' width="21" height="20" />
            </Pressable>
        </View>
    );
    
};


const styles = StyleSheet.create({
    fixed: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        bottom: 0,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
    },
  });

