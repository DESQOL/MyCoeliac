import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import RecipeScreen from '../screens/recipe/RecipeScreen';

const RouteConfigs = {
    RecipeScreen: { screen: RecipeScreen },
};

const RecipeNavigator = createStackNavigator(RouteConfigs);
const RecipeContainer = createAppContainer(RecipeNavigator);

export default RecipeContainer;
