import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import RecipeScreen from '../screens/home/recipeScreen';
import AboutScreen from '../screens/about/aboutScreen';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'screen',
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
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
