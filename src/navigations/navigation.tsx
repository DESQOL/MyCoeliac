import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation';
import onboardingScreen from '../screens/onboarding/onboardingScreen';
import loadingScreen from '../screens/loading/loadingScreen'

const RootNavigator = createSwitchNavigator(
  {
    LoadingScreen: loadingScreen,
    Onboarding: onboardingScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'LoadingScreen',
  },
);

export default createAppContainer(RootNavigator);
