import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/login/loginScreen';
import RegisterScreen from '../screens/registration/registrationScreen';
import { HeaderMode } from 'react-navigation-stack/lib/typescript/types';

const AuthNavigatorConfig = {
  initialRouteName: 'Register',
  header: null,
  headerMode: 'none' as HeaderMode
};

const RouteConfigs = {
    Login: LoginScreen,
    Register: RegisterScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
