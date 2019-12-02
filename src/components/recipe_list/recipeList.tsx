import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

interface RecipeListProps {
  recipes: any;
  recipeIdProps?: any;
}

export default function RecipeList(props: RecipeListProps): JSX.Element {
    function getRecipeId(id: number) {
        props.recipeIdProps = id;
    }

    return (<FlatList
        data={props.recipes}
        renderItem={({ item }: { item: any }) => (
            <ListItem
                onPress={() => getRecipeId(item.id)}
                title={item.title}
                subtitle={item.description}
                leftAvatar={{
                    source: { uri: item.image },
                    rounded: false,
                }}
            />
        )}
        keyExtractor={item => item.id.toString()}
    />);
}
