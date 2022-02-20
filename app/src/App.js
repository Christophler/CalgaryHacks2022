
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import NavigationBar from './components/NavigationBar';
import generalStyles from './generalStyles';
import GoogleMap from './components/GoogleMap';

const win = Dimensions.get('window');

const App = () => {
  return (
    <View style={{ height: win.height - 27, flexDirection: 'column', justifyContent: 'center', }}>
      <Text style={generalStyles.baseText}>From:</Text>
      <TextInput
        style={generalStyles.input}
        placeholder={'Enter the starting location'}
      />

      <Text style={generalStyles.baseText}>To:</Text>
      <TextInput
        style={generalStyles.input}
        placeholder={'Enter the destination'}
      />

      <View style={generalStyles.content}>
        <Image
          style={generalStyles.lineImage}
          source={require('./assets/Line1.png')}
        />
      </View>

      <Text style={generalStyles.baseText}>
        <Text style={generalStyles.titleText}>
          {'Title'}
          {'\n'}
        </Text>
      </Text>
      <View style={{ height: 400, width: 400, }}>
        <GoogleMap />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <NavigationBar></NavigationBar>
      </View>
    </View>
  );
};

export default App;
