import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Colors, Fonts } from '../src/Containers/utils';
import Login from './Containers/Login';
import Home from './Containers/Home';
import Products from './Containers/Products';
import Splash from './Containers/SplashScreen/';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.appColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          ...Fonts.style.title
        }
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "Home"
        }}
      />
      <Stack.Screen 
        name="Products" 
        component={Products} 
        options={{
          title: 'Products',
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
