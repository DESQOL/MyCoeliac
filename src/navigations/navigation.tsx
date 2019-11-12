import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);