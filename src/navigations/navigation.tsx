import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation';
import OnboardingScreen from '../screens/onboarding/onboardingScreen';
import LoadingScreen from '../screens/loading/loadingScreen';

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
