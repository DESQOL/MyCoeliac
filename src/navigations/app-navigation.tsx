import { createBottomTabNavigator } from 'react-navigation-tabs';

import RecipeScreen from '../screens/home/recipeListScreen';
import AboutScreen from '../screens/about/aboutScreen';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: {
        screen: RecipeScreen,
    },
    About: {
        screen: AboutScreen,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
