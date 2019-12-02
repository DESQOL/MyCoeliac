import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, SearchBar, Button } from 'react-native-elements';


interface AppProps {
    recipeProps: any;
    recipeIdProps: any;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    }
});

export default class RecipeList extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    getRecipeId(id: number) {
        this.props.recipeIdProps(id);
    }

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
                    data={this.props.recipeProps}
                    renderItem={({ item }: { item: any }) => <ListItem
                        onPress={() => {this.getRecipeId(item.id);}}
                        title={item.title}
                        subtitle={item.description}
                        leftAvatar={{
                            source: { uri: item.image },
                            rounded: false
                        }} />}
                    keyExtractor={(item, index) => item.id.toString()}
                />

                <Button title='Add new recipe' />
            </View>
        );
    }
}


