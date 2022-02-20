/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import generalStyles from './generalStyles';

const App = () => {
  return (
    <View>
      <Text style={generalStyles.input}>"Hi"</Text>
    </View>
  );
};

export default App;
