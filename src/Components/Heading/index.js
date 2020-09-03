import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Heading = (props) => {
  return <Text style={styles.heading}>{props.label}</Text>;
};

export default Heading;
