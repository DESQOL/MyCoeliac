import React from 'react';
import { View, FlatList, Image, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

interface AppState { isClicked: boolean };

const list = [
    { item: 'Scanner', id: 1 },
    { item: 'Recipes', id: 2 },
    { item: 'Map', id: 3 },
    { item: 'Community', id: 4 },
    { item: 'Profile', id: 5 },
];

const styles = StyleSheet.create({
    logo: {
        height: 20,
        width: 20,
    }
});

export default class navBar extends React.Component {

    public readonly state: Readonly<AppState> = {
        isClicked: false
    }

    toggleDisplay = () => {
        if (this.state) {
            if (this.state.isClicked) {
                this.setState({ isClicked: false })
            } else if (!this.state.isClicked) {
                this.setState({ isClicked: true })
            }
        }
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'MyCooliac' }}
                    leftComponent={<TouchableNativeFeedback onPress={this.toggleDisplay}>
                        <Icon name='menu' size={22} /></TouchableNativeFeedback>}
                    rightComponent={<Icon name='logout' size={22} />}
                />

                {this.state.isClicked ?
                    <FlatList
                        ItemSeparatorComponent={this.renderSeparator}
                        data={list}
                        renderItem={({ item }) => <ListItem title={item.item} />}
                    /> : null}
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };
}
