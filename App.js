import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Intro from './screens/Intro';
import Details from './screens/Details';
import SignOptions from './screens/SignOptions';
import Login from './screens/Login';
import Stories from './screens/Stories';
import Challenges from './screens/Challenges';
import Medical from './screens/Medical';
import Reflection from './screens/Reflection';
import Comments from './screens/Comments';
import Contribution from './screens/Contribution';
import Letters from './screens/Letters';
import Cow from './screens/Cow';
import StoryDetails from './screens/StoryDetails';
import Drawings from './screens/Drawings';
import Pictures from './screens/Pictures';



const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Drawings" component={Drawings} />
        <Stack.Screen name="Pictures" component={Pictures} />
        <Stack.Screen name="Stories" component={Stories} />         
        <Stack.Screen name="StoryDetails" component={StoryDetails} />
        <Stack.Screen name="Challenges" component={Challenges} /> 
        <Stack.Screen name="Medical" component={Medical} /> 
        <Stack.Screen name="Reflection" component={Reflection} /> 
        <Stack.Screen name="Contribution" component={Contribution} /> 
        <Stack.Screen name="Letters" component={Letters} /> 
        <Stack.Screen name="Cow" component={Cow} /> 
        <Stack.Screen name="Comments" component={Comments} />  
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignOptions" component={SignOptions} />
        <Stack.Screen name="Intro" component={Intro} />
        
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};