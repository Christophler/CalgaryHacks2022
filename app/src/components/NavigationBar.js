import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const win = Dimensions.get('window');

const NavigationBar = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#DCEDC8',
        }}>
        <Text>asdf</Text>
        <Text>asfda</Text>
        <Text>asfda</Text>
      </View>
    </>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({});
