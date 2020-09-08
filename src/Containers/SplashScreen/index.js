import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Role} from '../Utils/Constants';

const isUserLoggin = async (navigation) => {
  await AsyncStorage.getItem('accessToken').then((value) => {
    if (value !== null) {
      var role = AsyncStorage.getItem('role');
      if (role === Role.Doctor) {
        navigation.reset({
          routes: [{name: 'Doctor'}],
        });
      } else {
        navigation.reset({
          routes: [{name: 'Patient'}],
        });
      }
    } else {
      navigation.reset({
        routes: [{name: 'Category'}],
      });
    }
  });
};

const Splash = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  useEffect(() => {
    setTimeout(() => {
      isUserLoggin(props.navigation);
    }, 4000);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.container, opacity: fadeAnim}}>
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={Images.logo} resizeMode="contain" /> */}
        <Text style={styles.logoText}>Poly Clinic</Text>
      </View>
    </Animated.View>
  );
};

export default Splash;
