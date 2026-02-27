import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { JSX, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import NavBar from '../components/NavBar';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be of minimum 6 charaters')
    .required('Password is required'),
  conformPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});
const Week7 = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title={'Week 7 - Formik'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.mainContainer}
      >
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            password: '',
            conformPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            return Alert.alert(
              'User Details',
              JSON.stringify(values, null, 2),
              [
                {
                  text: 'OK',
                  onPress: () => resetForm(),
                },
              ],
              { cancelable: false },
            );
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.labelTxt}>Enter full name</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <TextInput
                    placeholder="Enter Fullname"
                    value={values.fullname}
                    onChangeText={handleChange('fullname')}
                    style={styles.txtInput}
                    keyboardType="default"
                    onBlur={handleBlur('fullname')}
                  />
                </TouchableWithoutFeedback>
                {touched.fullname && errors.fullname && (
                  <Text style={styles.errorText}>{errors?.fullname}</Text>
                )}

                <Text style={styles.labelTxt}>Enter email</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <TextInput
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    style={styles.txtInput}
                    keyboardType="email-address"
                    onBlur={handleBlur('email')}
                  />
                </TouchableWithoutFeedback>
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors?.email}</Text>
                )}

                <Text style={styles.labelTxt}>Enter password</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <TextInput
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    style={styles.txtInput}
                    secureTextEntry
                  />
                </TouchableWithoutFeedback>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors?.password}</Text>
                )}

                <Text style={styles.labelTxt}>Confirm password</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <TextInput
                    placeholder="Password"
                    value={values.conformPassword}
                    onChangeText={handleChange('conformPassword')}
                    onBlur={handleBlur('conformPassword')}
                    style={styles.txtInput}
                    secureTextEntry
                  />
                </TouchableWithoutFeedback>
                {touched.conformPassword && errors.conformPassword && (
                  <Text style={styles.errorText}>
                    {errors?.conformPassword}
                  </Text>
                )}
                <View style={{ marginTop: '7%' }}>
                  <Button title="Submit" onPress={handleSubmit} />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Week7;

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
  errorText: {
    color: 'red',
    marginTop: '1%',
  },
  labelTxt: {
    color: 'black',
    marginVertical: '2%',
  },
});
