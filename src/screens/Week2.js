import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';

const Week2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showUserInfo, setShowUserInfo] = useState(false);
  const handleInputData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = email => {
    return pattern.test(email);
  };
  const handleSubmit = () => {
    if (!formData.email.trim() || !formData.password.trim()) {
      Alert.alert('Error', 'All fields are Required!');
    }
    if (!validateEmail(formData.email)) {
      Alert.alert('Error', 'Invalid Email Address!');
    } else {
      Alert.alert('Success', 'Form submitted successfully!');
      setShowUserInfo(true);
      Keyboard.dismiss();
    }
  };
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    setShowUserInfo(false);
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.mainContainer}
      >
        <Text style={globalStyles.heading}>Profile Form - Week 2</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Name"
                value={formData.name}
                onChangeText={value => handleInputData('name', value)}
                style={styles.txtInput}
                keyboardType="default"
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Email"
                value={formData.email}
                onChangeText={value => handleInputData('email', value)}
                style={styles.txtInput}
                keyboardType="email-address"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                placeholder="Password"
                value={formData.password}
                onChangeText={value => handleInputData('password', value)}
                style={styles.txtInput}
                secureTextEntry
              />
            </TouchableWithoutFeedback>
          </View>

          <Button title="Submit" onPress={handleSubmit} />
        </View>
        {showUserInfo ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoHeading}>Entered Information</Text>
            <Text style={styles.infoText}>Name: {formData.name}</Text>
            <Text style={styles.infoText}>Email: {formData.email}</Text>
            <Text style={styles.infoText}>Password: {formData.password}</Text>
            <Button title="Clear" onPress={handleClear} color={'red'} />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Week2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: '5%',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  formContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  inputContainer: {
    height: '55%',
    justifyContent: 'space-between',
  },
  infoContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  infoHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
  },
});
