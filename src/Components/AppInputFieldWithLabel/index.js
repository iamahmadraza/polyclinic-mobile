import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const AppInputFieldWithLabel = (props) => {
  return (
    <View style={[styles.feildContainer, props.containerStyles]}>
      <Text style={styles.fieldLabel}>{props.fieldLabel}</Text>
      <TextInput
        placeholder={props.fieldLabel}
        style={[styles.input, props.inputStyles]}
        onChangeText={(text) => props.onChangeText(text)}
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry}
        value={props.value}
      />
      {props.errorText !== '' && (
        <Text style={styles.errorLabel}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default AppInputFieldWithLabel;
