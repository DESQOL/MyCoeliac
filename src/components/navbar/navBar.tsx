import React from 'react';
import { View, FlatList, TouchableNativeFeedback } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

import { GrayLighter } from '../../styles/config/colors';
import { SEPARATOR_HEIGHT } from '../../styles/components/navbar';


interface AppState {
    isClicked: boolean;
}

const list = [
    { item: 'Scanner', id: 1 },
    { item: 'Recipes', id: 2 },
    { item: 'Map', id: 3 },
    { item: 'Community', id: 4 },
    { item: 'Profile', id: 5 },
];

export default class NavBar extends React.Component {

    public readonly state: Readonly<AppState> = {
        isClicked: false
    };

    toggleDisplay = () => {
        if (this.state) {
            if (this.state.isClicked) {
                this.setState({ isClicked: false });
            } else if (!this.state.isClicked) {
                this.setState({ isClicked: true });
            }
        }
    };

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'MyCooliac' }}
                    leftComponent={<TouchableNativeFeedback onPress={this.toggleDisplay}>
                        <Icon name='menu' size={25} /></TouchableNativeFeedback>}
                    rightComponent={<Icon name='log-out' size={22} />}
                />

                {this.state.isClicked ?
                    <FlatList
                        ItemSeparatorComponent={this.renderSeparator}
                        data={list}
                        renderItem={({ item }) => <ListItem title={item.item} />}
                        keyExtractor={(item, index) => item.id.toString()}
                    /> : null}
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: SEPARATOR_HEIGHT,
                    backgroundColor: GrayLighter,
                }}
            />
        );
    };
}
