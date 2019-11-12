import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/login/loginScreen';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  
};

const RouteConfigs = {
  Login: LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;