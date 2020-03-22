/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
Navigation.registerComponent('navigation.playground.Login', () => Login);
Navigation.registerComponent('navigation.playground.Home', () => Home);

export const goHome = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.Home',
      },
    },
  });

export const goAuth = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.Login',
      },
    },
  });

Navigation.events().registerAppLaunchedListener(() => {
  goAuth();
});
