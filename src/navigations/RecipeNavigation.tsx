import { createStackNavigator } from 'react-navigation-stack';

import RecipeScreen from '../screens/recipe/RecipeScreen';
import RecipeListScreen from '../screens/home/RecipeListScreen';
import CommentScreen from '../screens/comment/CommentScreen';

const RouteConfigs = {
    InitialScreen: { screen: RecipeListScreen },
    RecipeScreen: { screen: RecipeScreen },
    CommentScreen: { screen: CommentScreen },
};

const RecipeNavigator = createStackNavigator(RouteConfigs, { initialRouteName: 'InitialScreen', headerMode: 'none' });

export default RecipeNavigator;
