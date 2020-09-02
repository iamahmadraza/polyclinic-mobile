import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
export default class AppInputField extends React.Component {
  render() {
    return (
      <View style={[styles.feildContainer, this.props.containerStyles]}>
        {/* <Text style={styles.fieldLabel}>{this.props.fieldLabel}</Text> */}
        <TextInput
          placeholder={this.props.fieldLabel}
          style={[styles.input, this.props.inputStyles]}
          onChangeText={(text) => this.props.onChangeText(text)}
          autoCapitalize="none"
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
        />
        {this.props.errorText !== '' && (
          <Text style={styles.errorLabel}>{this.props.errorText}</Text>
        )}
      </View>
    );
  }
}
