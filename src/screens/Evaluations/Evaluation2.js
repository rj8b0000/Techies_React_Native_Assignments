import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import EvaluationHeader from './components/Evaluation1/EvaluationHeader';
import WhiteBag from '../../../assets/white_bag.svg';
import Plus from '../../../assets/Plus.svg';
import Down from '../../../assets/Down.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import { FontFamily } from '../../theme/typography';
import HeaderComponent from './components/Evaluation2/HeaderComponent';
import AddressComponent from './components/Evaluation2/AddressComponent';
import SubHeadingComponent from './components/Evaluation2/SubHeadingComponent';
import ButtonComponent from './components/Evaluation2/ButtonComponent';
import BottomButton from './components/Evaluation2/BottomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressToList } from '../redux/addressSlice';
const Evaluation2 = () => {
  const addressData = [
    {
      firstName: 'Iris',
      lastName: 'Watson',
      address: '606-3727 Ullamcorper. Street',
      city: 'Roseville',
      state: 'NH',
      zipCode: '11523',
      phoneNumber: '(786) 713-8616',
    },
    {
      firstName: 'Iris',
      lastName: 'Watson',
      address: '606-3727 Ullamcorper. Street',
      city: 'Roseville',
      state: 'NH',
      zipCode: '11523',
      phoneNumber: '(786) 713-8616',
    },
  ];
  const address = useSelector(state => state.address.address);
  console.log('Address data: ', address);
  return (
    <SafeAreaView style={globalStyles.container} edges={['top']}>
      <ScrollView>
        <EvaluationHeader />
        <View style={styles.spacerSmall} />
        <View style={styles.wrapper}>
          <HeaderComponent title={'CHECKOUT'} />
          <View style={styles.sectionBorder}>
            <SubHeadingComponent title={'SHIPPING ADDRESS'} />
            <FlatList
              data={address}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <AddressComponent item={item} />}
            />

            <ButtonComponent
              title={'Add shipping address'}
              Icon={<Plus width={20} height={20} />}
              screenName={'AddNewAddress'}
            />
          </View>
          <View style={styles.sectionWithMargin}>
            <SubHeadingComponent title={'SHIPPING METHOD'} />
            <ButtonComponent
              title={'Pickup at store'}
              Icon={<Down width={24} height={24} />}
            />
          </View>
          <View style={styles.sectionWithMargin}>
            <SubHeadingComponent title={'PAYMENT METHOD'} />
            <ButtonComponent
              title={'select payment method'}
              Icon={<Down width={24} height={24} />}
            />
          </View>
        </View>
        <View style={styles.spacerLarge} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>$240</Text>
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
      <BottomButton
        Icon={<WhiteBag width={24} height={24} />}
        title={'PLACE ORDER'}
      />
      <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'black' }} />
    </SafeAreaView>
  );
};

export default Evaluation2;

const styles = StyleSheet.create({
  spacerSmall: { height: '2%' },
  wrapper: { width: '100%', paddingHorizontal: '4%' },
  checkoutLabel: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: '#888888',
  },
  sectionWithMargin: { marginTop: '10%' },
  spacerLarge: { height: 100 },
  totalRow: {
    paddingHorizontal: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10%',
  },
  totalLabel: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    color: '#333333',
    letterSpacing: 2,
  },
  totalValue: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    letterSpacing: 2,
    color: '#DD8560',
  },
});
