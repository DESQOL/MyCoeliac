import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';
import LoadingScreen from '../screens/loading/LoadingScreen';
import ProfileScreen from '../screens/profile/profileScreen';
import SettingsScreen from '../screens/settings/settingsScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

const RootNavigator = createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        Onboarding: OnboardingScreen,
        Auth: AuthNavigator,
        App: AppNavigator,
        Profile:ProfileScreen,
        SettingScreen: SettingsScreen
    },
    {
        initialRouteName: 'App',
    },
);

export default createAppContainer(RootNavigator);
