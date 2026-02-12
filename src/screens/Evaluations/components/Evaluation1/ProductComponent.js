import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Star from '../../../../../assets/star.svg';
import Heart from '../../../../../assets/heart.svg';

const ProductComponent = ({ item, isGrid }) => {
  return (
    <View
      style={{
        width: isGrid ? '100%' : '48%',
        marginTop: '2%',
        height: isGrid ? 200 : 294,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: isGrid ? 'row' : 'column',
        }}
      >
        <View
          style={{
            height: isGrid ? 190 : 220,
            borderColor: isGrid ? 'green' : 'red',
            width: isGrid ? '40%' : '100%',
          }}
        >
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View
          style={{
            marginTop: isGrid ? 0 : '4%',
            width: isGrid ? '60%' : '100%',
            padding: isGrid ? '4%' : '0%',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: isGrid ? 18 : 16,
                fontFamily: FontFamily.regular,
                color: 'black',
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: isGrid ? 15 : 13,
                fontFamily: FontFamily.regular,
                color: '#555',
              }}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: isGrid ? 18 : 16,
                fontFamily: FontFamily.regular,
                color: '#DD8560',
              }}
            >
              ${item.price}
            </Text>
          </View>

          {isGrid && (
            <View
              style={{
                marginTop: '2%',
                height: '45%',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: '2%',
                }}
              >
                <Star width={18} height={18} />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: FontFamily.regular,
                    color: '#000',
                  }}
                >
                  4.8 Ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 6,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontFamily: FontFamily.regular }}
                  >
                    Size
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 6 }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#DEDEDE',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: FontFamily.regular,
                          padding: '5%',
                        }}
                      >
                        S
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#DEDEDE',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: FontFamily.regular,
                          padding: '5%',
                        }}
                      >
                        M
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#DEDEDE',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: FontFamily.regular,
                          padding: '5%',
                        }}
                      >
                        L
                      </Text>
                    </View>
                  </View>
                </View>
                <Heart width={20} height={20} />
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({});
