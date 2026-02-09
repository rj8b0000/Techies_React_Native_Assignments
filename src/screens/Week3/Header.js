import { Text, View } from 'react-native';
import { Feather } from '@react-native-vector-icons/feather';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { globalStyles } from '../../../globalStyles';

const Header = () => {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.headerTitle}>Online Shop</Text>
      <View style={globalStyles.headerIcons}>
        <Feather name="search" size={24} color="#000" />
        <Ionicons name="mail-outline" size={28} color="#000" />
        <Feather name="bell" size={24} color="#000" />
      </View>
    </View>
  );
};

export default Header;
