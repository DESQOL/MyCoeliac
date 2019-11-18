import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, SearchBar, Button } from 'react-native-elements';

const list = [
    {
        id: 1,
        image: 'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
        title: 'Banana bread',
        description: '...'
    },
    { id: 2, image: null, title: 'Chocolate cake', description: '...' },
];

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    }
});

export default class RecipeList extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search: any) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View>

                <Text style={styles.title}>Recipes</Text>

                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                />

                <FlatList
                    data={list}
                    renderItem={({ item }) => <ListItem title={item.title}
                        subtitle={item.description}
                        leftAvatar={{
                            source: { uri: item.image || null },
                            rounded: false
                        }} />}
                />

                <Button title='Add new recipe' />
            </View>
        )
    }
}


