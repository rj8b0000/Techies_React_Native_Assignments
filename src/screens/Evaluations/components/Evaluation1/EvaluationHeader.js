import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Logo from '../../../../../assets/logo.svg';
import Menu from '../../../../../assets/menu.svg';
import Search from '../../../../../assets/search.svg';
import Bag from '../../../../../assets/bag.svg';

const Header = () => {
  return (
    <View style={styles.localContainer}>
      <Menu width={28} height={28} />
      <Logo width={88} height={44} style={{ marginLeft: '10%' }} />
      <View style={styles.localIconsContainer}>
        <Search width={28} height={28} />
        <Bag width={26} height={26} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  localContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    // marginTop: '2%',
  },
  localIconsContainer: {
    flexDirection: 'row',
    gap: 14,
  },
});
