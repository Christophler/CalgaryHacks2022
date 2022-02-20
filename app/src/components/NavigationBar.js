import {Dimensions, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import contact from '../assets/contact.png';
import traveller from '../assets/traveller.png';
import settings from '../assets/settingsNav.png';

const win = Dimensions.get('window');

const NavigationBar = () => {
  return (
    <>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#DCEDC8',
        }}>
        <Image source={contact} />
        <Image source={traveller} />
        <Image source={settings} />
      </View>
    </>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({});
