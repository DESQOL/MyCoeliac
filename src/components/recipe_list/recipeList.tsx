import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

interface RecipeListProps {
  recipes: any;
  recipeIdProps: any;
}

const RecipeList = ({ recipes }: RecipeListProps) => (
    getRecipeId(id: number) {
    this.props.recipeIdProps(id);
}

    <FlatList
        data={recipes}
        renderItem={({ item }: { item: any }) => (
            <ListItem
                title={item.title}
                subtitle={item.description}
                leftAvatar={{
                    source: { uri: item.image },
                    rounded: false,
                }}
            />
        )}
        keyExtractor={item => item.id.toString()}
    />
);
export default RecipeList;
