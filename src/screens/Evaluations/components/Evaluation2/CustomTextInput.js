import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';

const CustomTextInput = ({ placeHolder, keyboardType, state, setState }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInput
        placeholder={placeHolder}
        style={styles.textInputStyle}
        placeholderTextColor={'#979797'}
        keyboardType={keyboardType}
        value={state}
        onChangeText={setState}
      />
    </TouchableWithoutFeedback>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 2,
    borderColor: '#979797',
    fontFamily: FontFamily.regular,
    height: 50,
    fontSize: 18,
  },
});
