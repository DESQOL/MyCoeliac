import { createStackNavigator } from 'react-navigation-stack';

import CommentScreen from '../screens/comment/CommentScreen';

const RouteConfigs = {
    CommentScreen: { screen: CommentScreen },
};

const RecipeNavigator = createStackNavigator(RouteConfigs, { initialRouteName: 'CommentScreen', headerMode: 'none' });

export default RecipeNavigator;
