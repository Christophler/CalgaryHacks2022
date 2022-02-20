/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Dimensions, TextInput, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import NavigationBar from './components/NavigationBar';
import generalStyles from './generalStyles';

const win = Dimensions.get('window');

const App = () => {
  return (
    <>
      <NavigationContainer>
        <View style={{height: win.height - 27}}>
          <Text style={generalStyles.baseText}>From:</Text>

          <TextInput
            style={generalStyles.input}
            placeholder={'Enter the starting location'}
          />

          <Text style={generalStyles.baseText}>
            <Text style={generalStyles.titleText}>
              {'Title'}
              {'\n'}
              {'\n'}
            </Text>
            <Text numberOfLines={5}>{'Hi'}</Text>
          </Text>
          <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <NavigationBar></NavigationBar>
          </View>
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
