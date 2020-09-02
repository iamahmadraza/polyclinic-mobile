import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Colors, Fonts} from '../src/Containers/utils';
import Login from './Containers/Login';
import Home from './Containers/Home';
import Speciality from './Containers/Speciality';
import Splash from './Containers/SplashScreen/';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import SignUp from './Containers/SignUp';
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
          ...Fonts.style.title,
          color: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Speciality"
        component={Speciality}
        options={{
          title: 'Choose Speciality',
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
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
