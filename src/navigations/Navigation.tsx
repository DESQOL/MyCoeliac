import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';
import RecipeNavigator from './RecipeNavigation';
import LoadingScreen from '../screens/loading/LoadingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/settingsScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

const RootNavigator = createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        Onboarding: OnboardingScreen,
        Auth: AuthNavigator,
        App: AppNavigator,
        Recipe: RecipeNavigator,
        Profile:ProfileScreen,
        SettingScreen: SettingsScreen
    },
    {
        initialRouteName: 'LoadingScreen',
    },
);

export default createAppContainer(RootNavigator);
