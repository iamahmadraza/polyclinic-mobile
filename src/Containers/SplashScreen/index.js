import React, {useEffect, useState} from 'react';
import {Image, Animated} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Role} from '../Utils/Constants';
import {Images} from '../Utils';

const isUserLoggin = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem('accessToken');
    const role = await AsyncStorage.getItem('role');
    if (value !== null) {
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
  } catch (error) {
    // Error retrieving data
  }
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
      <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
    </Animated.View>
  );
};

export default Splash;
