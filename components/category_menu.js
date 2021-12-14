import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import MyIcons from './myIcons';


export default function Category_menu( props ) {

    const {name, icon, url, params, navigation} = props;


    return (
      <Pressable  style={[tailwind('w-full flex justify-center items-center rounded-lg h-20'), styles.bgOrange]}
        onPress={() => navigation.navigate(url, params)}>
          <View style={tailwind('flex flex-col items-center')}>
            <MyIcons name={icon} width="24" height="20" />
            <Text style={tailwind('text-sm text-white mt-1')}>{name}</Text>
          </View>
      </Pressable>
    );
};



const styles = StyleSheet.create({
  bgOrange: {
    backgroundColor: '#FE5B24',
  },
});
