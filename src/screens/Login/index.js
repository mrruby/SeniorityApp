import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import * as Keychain from 'react-native-keychain';
import TouchID from 'react-native-touch-id';
import {goHome} from '../../../index.js';
const Login: () => React$Node = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    color: '#e00606', // Android,
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  };

  const logIn = async accessControl => {
    try {
      await Keychain.setGenericPassword(login, pass);
      setLogin('');
      setPass('');
      goHome();
    } catch (err) {
      console.log(err);
    }
  };

  const load = async () => {
    try {
      await TouchID.authenticate(
        'to demo this react-native component',
        optionalConfigObject,
      );
      const {username, password} = await Keychain.getGenericPassword();
      setLogin(username);
      setPass(password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            autoFocus={true}
            autoCapitalize="none"
            value={login}
            onChange={event => setLogin(event.nativeEvent.text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            password={true}
            autoCapitalize="none"
            value={pass}
            onChange={event => setPass(event.nativeEvent.text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.buttons}>
          <Button onPress={logIn} title={'Login'} />
          <Button onPress={load} title={'LoginWithFaceId'} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 20,
  },
  field: {
    marginVertical: 5,
  },
  label: {
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    backgroundColor: 'white',
    height: 32,
    fontSize: 14,
    padding: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Login;
