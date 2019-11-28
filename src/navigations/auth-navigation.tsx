import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/login/loginScreen';
import { HeaderMode } from 'react-navigation-stack/lib/typescript/types';

const AuthNavigatorConfig = {
<<<<<<< HEAD
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none' as HeaderMode
=======
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none' as HeaderMode
>>>>>>> master
};

const RouteConfigs = {
    Login: LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
