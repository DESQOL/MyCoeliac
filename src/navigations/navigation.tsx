import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation';
import onboardingScreen from '../screens/onboarding/onboardingScreen';
import loadingScreen from '../screens/loading/loadingScreen'
const LoadingScreen = createStackNavigator({ SignIn: loadingScreen });
const OnboardingScreen = createStackNavigator({ SignIn: onboardingScreen });
const RootNavigator = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    Onboarding: OnboardingScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'LoadingScreen',
  },
);

export default createAppContainer(RootNavigator);