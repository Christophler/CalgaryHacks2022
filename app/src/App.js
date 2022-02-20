
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import NavigationBar from './components/NavigationBar';
import generalStyles from './generalStyles';
import GoogleMap from './components/GoogleMap';
import BottomSheet from "react-native-gesture-bottom-sheet";
import DetailCard from './components/DetailCard';
import distanceCalculations from './Util';

const win = Dimensions.get('window');

const App = () => {

  const bottomSheet = useRef();
  const [distance, setDistance] = useState(0);
  const [summary, setSummary] = useState(distanceCalculations(distance));
  const [t, setT] = useState(<React.Fragment></React.Fragment>);

  return (
    <View style={{ height: win.height - 27, }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', }}>
        <Text style={generalStyles.baseText}>
          <Text style={{ fontSize: 36, fontWeight: 'bold', }}>
            {'WhereTo?'}
            {'\n'}
          </Text>
        </Text>
      </View>
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
          {'Select From and To'}
        </Text>
      </Text>
      <View style={{ height: 400, width: 600, }}>
        <GoogleMap setDistanceFn={setDistance} />
      </View>
      <View style={{ height: 20 }}></View>
      <Button title={'GO'} onPress={() => {
        const summary = distanceCalculations(distance);
        setSummary(summary);
        setT(
          <View>
            <DetailCard
              imageObject={require('./assets/bike.png')}
              activityName={summary.bike.activityName}
              timeString={summary.bike.timeString}
              costString={summary.bike.costString}
              backgroundColor="#E5E5E5"
            />
          </View>
        );
        bottomSheet.current.show()
      }} />
      <BottomSheet on hasDraggableIcon ref={bottomSheet} height={600}>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 400, height: 600, }}>
          <ScrollView style={{}}>
            <DetailCard
              imageObject={require('./assets/walk.png')}
              activityName={summary.walk.activityName}
              timeString={summary.walk.timeString}
              costString={summary.walk.costString}
              backgroundColor="#E5E5E5"
            />
            <DetailCard
              imageObject={require('./assets/bike.png')}
              activityName={summary.bike.activityName}
              timeString={summary.bike.timeString}
              costString={summary.bike.costString}
              backgroundColor="#E5E5E5"
            />
            <DetailCard
              imageObject={require('./assets/scooter.png')}
              activityName={summary.scooter.activityName}
              timeString={summary.scooter.timeString}
              costString={summary.scooter.costString}
              backgroundColor="#E5E5E5"
            />
            <DetailCard
              imageObject={require('./assets/bus.png')}
              activityName={summary.bus.activityName}
              timeString={summary.bus.timeString}
              costString={summary.bus.costString}
              backgroundColor="#E5E5E5"
            />
            <DetailCard
              imageObject={require('./assets/car.png')}
              activityName={summary.car.activityName}
              timeString={summary.car.timeString}
              costString={summary.car.costString}
              backgroundColor="#E5E5E5"
            />
          </ScrollView>
        </View>
      </BottomSheet >
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <NavigationBar></NavigationBar>
      </View>
    </View >
  );
};

export default App;
