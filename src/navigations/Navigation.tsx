import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';
import RecipeNavigator from './RecipeNavigation';
import ProfileNavigator from './ProfileNavigator';
import LoadingScreen from '../screens/loading/LoadingScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

const RootNavigator = createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        Onboarding: OnboardingScreen,
        ProfileNavigator: ProfileNavigator,
        Auth: AuthNavigator,
        App: AppNavigator,
        Recipe: RecipeNavigator,
    },
    {
        initialRouteName: 'LoadingScreen',
    },
);

export default createAppContainer(RootNavigator);
