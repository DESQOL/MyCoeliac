import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import NavHeader from '../../components/ui-components/NavHeader';
import Recipe from '../../components/recipe/recipe';

interface AppProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const dummyList = [
    {
        id: 1,
        image:
            'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
        title: 'Banana bread',
        description: 'This is a banana bread recipe',
        ingredients: [
            { id: 1, name: 'flour', amount: '1 1/2 cups' },
            { id: 2, name: 'sugar', amount: '1 tbsp' },
        ],
        duration: '40 mins',
        rating: 4,
    },
    {
        id: 2,
        image: null,
        title: 'Chocolate cake',
        description: '...',
        ingredients: [
            { id: 1, name: 'flour', amount: '1 1/2 cups' },
            { id: 2, name: 'sugar', amount: '1 tbsp' },
        ],
        duration: '1 h 20 mins',
        rating: 3,
    },
];

export default class RecipeScreen extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render(): JSX.Element {
        const { navigation } = this.props;

        const getRecipeId = JSON.stringify(navigation.getParam('recipeId', 'ID'));
        const getRecipeIdNum = parseInt(getRecipeId);

        return (
            <SafeAreaView>
                <NavHeader title={'MyCooliac'} navIcon={true}/>
                <View>
                    <Recipe recipeProps={dummyList[getRecipeIdNum - 1]}/>
                </View>
            </SafeAreaView>
        );
    }
}
