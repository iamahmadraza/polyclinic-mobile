import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AppInputField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

export default AppInputField;
