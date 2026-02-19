import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvaluationHeader from '../components/Evaluation1/EvaluationHeader';
import HeaderComponent from '../components/Evaluation2/HeaderComponent';
import { globalStyles } from '../../../../globalStyles';
import BottomButton from '../components/Evaluation2/BottomButton';
import { FontFamily } from '../../../theme/typography';
import CustomTextInput from '../components/Evaluation2/CustomTextInput';
import { useDispatch } from 'react-redux';
import { addAddressToList } from '../../../redux/addressSlice';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const AddNewAddress = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const tasks = useSelector(state => state.todo.tasks);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const saveAddress = () => {
    const addressData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
    };
    setFirstName('');
    setLastName('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setPhoneNumber('');
    dispatch(addAddressToList(addressData));
    navigation.navigate('Evaluation2');
  };
  return (
    <>
      <SafeAreaView style={[globalStyles.container]} edges={['top']}>
        <ScrollView>
          <EvaluationHeader />
          <View style={styles.spacerSmall} />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.wrapper}
          >
            {/* <View style={styles.wrapper}> */}
            <HeaderComponent title={'ADD SHIPPING ADDRESS'} />
            <View
              style={{
                height: '80%',
                justifyContent: 'space-between',
                marginTop: '5%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: '48.5%' }}>
                  <CustomTextInput
                    placeHolder={'First Name'}
                    state={firstName}
                    setState={setFirstName}
                    keyboardType={'default'}
                  />
                </View>
                <View style={{ width: '48.5%' }}>
                  <CustomTextInput
                    placeHolder={'Last Name'}
                    state={lastName}
                    setState={setLastName}
                    keyboardType={'default'}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                }}
              >
                <CustomTextInput
                  placeHolder={'Address'}
                  state={address}
                  setState={setAddress}
                  keyboardType={'default'}
                />
              </View>
              <View
                style={{
                  width: '100%',
                }}
              >
                <CustomTextInput
                  placeHolder={'City'}
                  state={city}
                  setState={setCity}
                  keyboardType={'default'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: '48.5%' }}>
                  <CustomTextInput
                    placeHolder={'State'}
                    state={state}
                    setState={setState}
                  />
                </View>
                <View style={{ width: '48.5%' }}>
                  <CustomTextInput
                    placeHolder={'ZIP Code'}
                    state={zipCode}
                    setState={setZipCode}
                    keyboardType={'numeric'}
                  />
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                }}
              >
                <CustomTextInput
                  placeHolder={'Phone Number'}
                  state={phoneNumber}
                  setState={setPhoneNumber}
                  keyboardType={'phone-pad'}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          {/* <View style={{ height: 140 }} /> */}
        </ScrollView>
        <BottomButton title={'ADD NOW'} onPress={saveAddress} />
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'black' }} />
      </SafeAreaView>
    </>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({
  spacerSmall: { height: '2%' },
  wrapper: { width: '100%', paddingHorizontal: '4%' },
});
