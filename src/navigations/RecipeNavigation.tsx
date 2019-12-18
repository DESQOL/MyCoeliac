import { createStackNavigator } from 'react-navigation-stack';
import RecipeScreen from '../screens/recipe/recipeScreen';
import { createAppContainer } from 'react-navigation';

const RecipeNavigator = createStackNavigator({
    RecipeScreen: { screen: RecipeScreen },
},);

const RecipeContainer = createAppContainer(RecipeNavigator);

export default RecipeContainer;
