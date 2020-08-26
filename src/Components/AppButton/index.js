import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Colors } from '../../Containers/utils';
import styles from './styles';

export default AppButton = (props) => {
  return (
    <View
      style={[
        styles.buttonMainContainer,
        props.buttonMainContainerStyles,
      ]}>
        {props.loading ? 
          <ActivityIndicator animating={props.loading} size="large" color={Colors.textColor} />
        : 
          <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{props.label}</Text>
          </TouchableOpacity>
        }
    </View>
  );
}
  
