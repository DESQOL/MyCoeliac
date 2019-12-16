import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';

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
