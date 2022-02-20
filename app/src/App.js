/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Dimensions, SafeAreaView} from 'react-native';
import NavigationBar from './components/NavigationBar';
import generalStyles from './generalStyles';

const win = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView>
      <View style={{height: win.height}}>
        <Text style={generalStyles.input}>"Hi"</Text>
        <Text style={generalStyles.input}>"Hi"</Text>
        <View style={{position: 'absolute', bottom: 28, width: '100%'}}>
          <NavigationBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
