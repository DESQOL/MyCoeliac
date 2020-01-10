import React from 'react';
import { FlatList } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import RecipeCard from '../molecules/RecipeCard';

interface RecipeListProps {
  recipes: any;
  recipeIdProps?: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  recipeListProps?: any;
}

export default function RecipeList(props: RecipeListProps): JSX.Element {
    const { navigation } = props;

    // Signal parent screen if end of page is reached
    const detectEndOfPage = () => {
        props.recipeListProps = true;
    };

    return (<FlatList
        showsVerticalScrollIndicator={false}
        data={props.recipes}
        renderItem={({ item }: { item: any }) => (
            <RecipeCard list={item} navigationProps={{ navigation }}/>
        )}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={detectEndOfPage}
    />
    );
}
