import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  Platform,
} from 'react-native';
import {goAuth, goDataPicker} from '../../../index.js';

const Home: () => React$Node = ({componentId}) => {
  const [bulbLight, setBulbLight] = useState(false);

  const updateStatus = () => {
    NativeModules.Bulb.getStatus((error, isOn) => {
      setBulbLight(isOn);
    });
  };

  const turnBulb = () => {
    if (bulbLight) {
      return NativeModules.Bulb.turnOff();
    }
    return NativeModules.Bulb.turnOn();
  };

  const turnAndUpdateStatus = () => {
    turnBulb();
    updateStatus();
  };

  return (
    <View style={styles.container}>
      <View
        accessible={true}
        accessibilityLabel="AppInfo: home screen and all app functions below">
        <Text style={styles.title}>HOME</Text>
        <Text style={styles.title}>ALL APP FUNCTIONS</Text>
      </View>

      <Button
        onPress={turnAndUpdateStatus}
        title={`Turn bulb ${bulbLight ? 'off' : 'on'}`}
        accessible={true}
        accessibilityLabel="Tap me to turn the bulb!"
      />
      <Button
        onPress={() => goDataPicker(componentId)}
        title={'Data Picker Screen'}
      />
      <Button onPress={goAuth} title={'Logout'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 26,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Home;
