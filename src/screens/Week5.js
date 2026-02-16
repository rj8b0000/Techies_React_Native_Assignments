import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Week5 = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </SafeAreaView>
  );
};

export default Week5;

const styles = StyleSheet.create({});
