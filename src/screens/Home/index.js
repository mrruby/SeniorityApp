import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, NativeModules} from 'react-native';
import {goAuth} from '../../../index.js';

const Home: () => React$Node = () => {
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
      <Text style={styles.title}>HOME</Text>
      <Button
        onPress={turnAndUpdateStatus}
        title={`Turn bulb ${bulbLight ? 'off' : 'on'}`}
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
