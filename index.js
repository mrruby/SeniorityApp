/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import DataPicker from './src/screens/DataPicker';
Navigation.registerComponent('navigation.playground.Login', () => Login);
Navigation.registerComponent('navigation.playground.Home', () => Home);
Navigation.registerComponent(
  'navigation.playground.DataPicker',
  () => DataPicker,
);

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'stackMain',
        children: [
          {
            component: {
              name: 'navigation.playground.Home',
            },
          },
        ],
      },
    },
  });

export const goDataPicker = componentId =>
  Navigation.push(componentId, {
    component: {
      name: 'navigation.playground.DataPicker',
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
