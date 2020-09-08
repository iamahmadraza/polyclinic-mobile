import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Colors, Fonts} from './Containers/Utils';
import Login from './Containers/Login';
import Home from './Containers/Home';
import Speciality from './Containers/Speciality';
import Splash from './Containers/SplashScreen/';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import SignUp from './Containers/SignUp';
import DoctorList from './Containers/DoctorList';
import Category from './Containers/Category';
import DoctorForm from './Containers/DoctorForm';
const Stack = createStackNavigator();

function PatientStack() {
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
          // alignSelf: 'center',
        },
        headerTitleAlign: 'center',
        headerTitleAllowFontScaling: true,
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
      <Stack.Screen
        name="DoctorList"
        component={DoctorList}
        options={{
          title: 'Doctors',
        }}
      />
    </Stack.Navigator>
  );
}

function DoctorStack() {
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
        name="DoctorHome"
        component={DoctorForm}
        options={{
          title: 'Home',
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
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Patient" component={PatientStack} />
        <Stack.Screen name="Doctor" component={DoctorStack} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
