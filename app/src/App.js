/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TextInput} from 'react-native';
import generalStyles from './generalStyles';

const App = () => {
  return (
    <View>
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
    </View>
  );
};

export default App;
