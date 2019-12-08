import React from 'react';
import { FlatList } from 'react-native';

import RecipeCard from '../../components/ui-components/recipeCard';

interface RecipeListProps {
  recipes: any;
  recipeIdProps?: any;
}

export default function RecipeList(props: RecipeListProps): JSX.Element {
    return (<FlatList
        showsVerticalScrollIndicator={false}
        data={props.recipes}
        renderItem={({ item }: { item: any }) => (
            <RecipeCard list={item}/>
        )}
        keyExtractor={item => item.id.toString()}
    />);
}
