import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';
import OnboardingScreen from '../screens/onboarding/onboardingScreen';
import LoadingScreen from '../screens/loading/loadingScreen';
import ProfileScreen from '../screens/profile/profileScreen';
import SettingsScreen from '../screens/settings/settingsScreen';

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
        initialRouteName: 'SettingScreen',
    },
);

export default createAppContainer(RootNavigator);
