import { Button, NativeModules, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Week10 = () => {
  const { MyNativeModule } = NativeModules;
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const toggle = () => {
    opacity.value = withTiming(opacity.value === 1 ? 0 : 1, {
      duration: 500,
    });
  };
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Button
    //     title="On Press"
    //     onPress={() => {
    //       MyNativeModule.showToast('Hello World');
    //     }}
    //   />
    // </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width: 150,
            height: 150,
            backgroundColor: 'tomato',
            marginBottom: 20,
          },
          animatedStyle,
        ]}
      />
      <Button title="Toggle Fade" onPress={toggle} />
    </View>
  );
};

export default Week10;

const styles = StyleSheet.create({});
