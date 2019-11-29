import React from 'react';
import { SafeAreaView } from 'react-native';

import RecipeList from '../../components/recipe_list/recipeList';
import NavBar from '../../components/navbar/navBar';
import RecipeCard from '../../components/recipe_card/recipeCard';

const dummyList = [
    { id: 1, image: 'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
        title: 'Banana bread',
        description: '...',
        ingredients: [
            { id: 1, name: 'flour', amount: '1 1/2 cups' },
            { id: 2, name: 'sugar', amount: '1 tbsp' }
        ],
        instructions: 'These are the instructions...',
        rating: 4,
        duration: '40 mins' },
    { id: 2,
        image: null,
        title: 'Chocolate cake',
        description: 'This is chocolate cake',
        ingredients: [
            { id: 1, name: 'flour', amount: '1 1/2 cups' },
            { id: 2, name: 'sugar', amount: '1 tbsp' }
        ],
        instructions: '' },
];

const recipeScreen = () => (
    <SafeAreaView>
        <NavBar />
        <RecipeCard recipeProps={dummyList} />
    </SafeAreaView>
);

export default recipeScreen;
