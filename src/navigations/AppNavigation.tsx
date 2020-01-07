import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';

import RecipeListScreen from '../screens/home/RecipeListScreen';

import { GrayDark, GrayLight, GrayLighter } from '../styles/config/Colors';
import BarcodeScanner from '../screens/barcode_scanner/BarcodeScanner';
import ProfileScreen from '../screens/profile/ProfileScreen';

function renderScannerIcon({ tintColor }: any) {
    return <Icon name="barcode-scan" size={25} color={tintColor} />;
}

function renderRecipesIcon({ tintColor }: any) {
    return <Icon name="book" size={25} color={tintColor} />;
}

renderRecipesIcon.propTypes = {
    tintColor: PropTypes.string.isRequired
};

renderScannerIcon.propTypes = {
    tintColor: PropTypes.string.isRequired
};

function getUserAvatar() {
    return (
        <Avatar
            rounded
            title={'EX'}
            size={25}
            overlayContainerStyle={{ backgroundColor: GrayLight }}
        />
    );
}

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    headerMode: 'screen',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: GrayLighter,
        inactiveTintColor: GrayDark
    }
};

const RouteConfigs = {
    Home: {
        screen: RecipeListScreen,
        navigationOptions: {
            tabBarIcon: renderRecipesIcon
        }
    },

    Scanner: {
        screen: BarcodeScanner,
        navigationOptions: {
            tabBarIcon: renderScannerIcon
        }
    },

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: getUserAvatar
        }
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
