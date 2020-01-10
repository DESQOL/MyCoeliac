import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfile from '../screens/editProfile/EditProfile';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { HeaderMode } from 'react-navigation-stack/lib/typescript/types';

const ProfileNavigatorConfig = {
    initialRouteName: 'ProfileScreen',
    header: null,
    headerMode: 'none' as HeaderMode
};

const RouteConfigs = {
    ProfileScreen: ProfileScreen,
    EditProfile: EditProfile,
    SettingsScreen:SettingsScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

export default AuthNavigator;
