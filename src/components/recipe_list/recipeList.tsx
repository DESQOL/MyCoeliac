import React from 'react';
import { FlatList } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import RecipeCard from '../../components/ui-components/recipeCard';

interface RecipeListProps {
  recipes: any;
  recipeIdProps?: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default function RecipeList(props: RecipeListProps): JSX.Element {
    const { navigation } = props;

    return (<FlatList
        showsVerticalScrollIndicator={false}
        data={props.recipes}
        renderItem={({ item }: { item: any }) => (
            <RecipeCard list={item} navigationProps={{ navigation }}/>
        )}
        keyExtractor={item => item.id.toString()}
    />);
}
