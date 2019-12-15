import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation';
import OnboardingScreen from '../screens/onboarding/onboardingScreen';
import LoadingScreen from '../screens/loading/loadingScreen';
import ProfileScreen from '../screens/profile/profileScreen';

const RootNavigator = createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        Onboarding: OnboardingScreen,
        Auth: AuthNavigator,
        App: AppNavigator,
        Profile:ProfileScreen,
    },
    {
        initialRouteName: 'App',
    },
);

export default createAppContainer(RootNavigator);
