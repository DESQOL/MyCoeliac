import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';

import RecipeListScreen from '../screens/home/RecipeListScreen';
import AboutScreen from '../screens/about/aboutScreen';
import RecipeScreen from '../screens/recipe/RecipeScreen';

import { GrayDark, GrayLight, GrayLighter } from '../styles/config/Colors';

function renderScannerIcon({ tintColor }: any) {
    return (<Icon name='barcode-scan' size={25} color={tintColor} />);
}

function renderRecipesIcon({ tintColor }: any) {
    return (<Icon name='book' size={25} color={tintColor} />);
}

renderRecipesIcon.propTypes = {
    tintColor: PropTypes.string.isRequired
};

renderScannerIcon.propTypes = {
    tintColor: PropTypes.string.isRequired
};

function getUserAvatar() {
    return(<Avatar rounded title={'EX'} overlayContainerStyle={{ backgroundColor: GrayLight }} />);
}

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    headerMode: 'screen',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: GrayLighter,
        inactiveTintColor: GrayDark,
    }
};

const RouteConfigs = {
    Home: {
        screen: RecipeListScreen,
        navigationOptions: {
            tabBarIcon: renderRecipesIcon,
        },
    },

    // TODO: Change into barcode scan screen
    Scanner: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarIcon: renderScannerIcon,
        },
    },

    // TODO: Change into profile screen. Use user avatar as icon.
    Profile: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarIcon: getUserAvatar,
        },
    },

    Recipe: {
        screen: RecipeScreen,
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
