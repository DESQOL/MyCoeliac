import React from 'react';
import { View, FlatList, TouchableNativeFeedback } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

import SeparatorPipe from '../../shared/pipes/separatorPipe';

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

export default class AppHeader extends React.Component {

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
                        ItemSeparatorComponent={SeparatorPipe}
                        data={list}
                        renderItem={({ item }) => <ListItem title={item.item} />}
                        keyExtractor={(item) => item.id.toString()}
                    /> : null}
            </View>
        );
    }
}
