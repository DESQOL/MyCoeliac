import { createStackNavigator } from 'react-navigation-stack';

import RecipeScreen from '../screens/recipe/RecipeScreen';
import RecipeListScreen from '../screens/home/RecipeListScreen';

const RouteConfigs = {
    InitialScreen: { screen: RecipeListScreen },
    RecipeScreen: { screen: RecipeScreen },
};

const RecipeNavigator = createStackNavigator(RouteConfigs, { initialRouteName: 'InitialScreen', headerMode: 'none' });

export default RecipeNavigator;
