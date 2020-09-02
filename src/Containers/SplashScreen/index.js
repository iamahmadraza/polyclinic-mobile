import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Images} from '../utils';

const isUserLoggin = async (navigation) => {
  await AsyncStorage.getItem('accessToken').then((value) => {
    if (value !== null) {
      navigation.reset({
        routes: [{name: 'Auth'}],
      });
    } else {
      navigation.reset({
        routes: [{name: 'Login'}],
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
