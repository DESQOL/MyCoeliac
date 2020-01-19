import React from 'react';
import { FlatList } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import RecipeCard from '../molecules/RecipeCard';

interface RecipeListProps {
    recipes: any;
    recipeIdProps?: any;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    recipeListProps?: any;
    onEndReached: (info: { distanceFromEnd: number }) => void;
}

export default function RecipeList(props: RecipeListProps): JSX.Element {
    const { navigation } = props;

    return (<FlatList
        data={props.recipes}
        keyExtractor={item => item.id.toString()}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.5}
        renderItem={({ item }: { item: any }) => (
            <RecipeCard
                list={item}
                navigationProps={{ navigation }}
            />
        )}
        showsVerticalScrollIndicator={false}
    />
    );
}
