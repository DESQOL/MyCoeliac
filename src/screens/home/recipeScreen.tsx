import React from 'react';
import { SafeAreaView } from 'react-native';

import RecipeList from '../../components/recipe_list/recipeList';
import NavBar from '../../components/navbar/navBar';

const dummyList = [
    {
        id: 1,
        image: 'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
        title: 'Banana bread',
        description: '...',
        rating: 4
    },
    { id: 2, image: null, title: 'Chocolate cake', description: '...', rating: 3 },
];

const recipeScreen = () => (
    <SafeAreaView>
        <NavBar />
        <RecipeList recipeProps={dummyList} />
    </SafeAreaView>
);

export default recipeScreen;
