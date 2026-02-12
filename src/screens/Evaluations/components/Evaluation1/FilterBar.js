import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Down from '../../../../../assets/arrow.svg';
import List from '../../../../../assets/listview.svg';
import Grid from '../../../../../assets/grid.svg';
import Filter from '../../../../../assets/filter.svg';
import { TouchableOpacity } from 'react-native';

const FilterBar = ({ isGrid, setIsGrid }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 18, fontFamily: FontFamily.regular }}>
        4500 APPAREL
      </Text>
      <View
        style={{
          width: '46%',
          alignSelf: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 6,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '6%',
            paddingHorizontal: '8%',
            borderRadius: 30,
            backgroundColor: '#f2f2f2ff',
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.regular,
              color: '#555555',
              fontSize: 14,
            }}
          >
            New
          </Text>
          <Down width={8} height={8} />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f2f2f2ff',
            padding: '5%',
            borderRadius: 50,
          }}
          onPress={() => {
            setIsGrid(prev => !prev);
          }}
        >
          {isGrid ? (
            <Grid width={22} height={22} />
          ) : (
            <List width={22} height={22} />
          )}
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f2f2f2ff',
            padding: '5%',
            borderRadius: 50,
          }}
        >
          <Filter width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({});
