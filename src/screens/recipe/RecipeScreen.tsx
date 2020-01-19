import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import NavHeader from '../../components/atoms/NavHeader';
import Recipe from '../../components/molecules/Recipe';

interface RecipeState {
    recipes: any;
}

interface AppProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class RecipeScreen extends React.Component<AppProps, RecipeState> {
    constructor(props: AppProps) {
        super(props);

        this.getRecipe().catch(error => console.log(error));
    }

    public readonly state: RecipeState = {
        recipes: []
    };

    getRecipe = async () => {
        const token = await AsyncStorage.getItem('token');
        // TODO: Retrieve limit and offset based on recipe list screen
        const getRecipeUrl = `https://desqol.hihva.nl/recipe/search?limit=100&offset=0&api_key=${token}`;

        fetch(getRecipeUrl)
            .then(recipeData => recipeData.json())
            .then(data => {
                if (data.recipes) {
                    this.setState({ recipes: data.recipes });
                }
            });
    };

    render(): JSX.Element {
        const { navigation } = this.props;

        const getRecipeId = JSON.stringify(navigation.getParam('recipeId', 'ID'));
        const getRecipeIdNum = parseInt(getRecipeId);

        function findRecipe(recipe: any) {
            return recipe.id === getRecipeIdNum;
        }

        return (
            <SafeAreaView>
                <NavHeader
                    navIcon
                    onClick={() => navigation.goBack(null)}
                    title="MyCoeliac"
                />
                <View>
                    <Recipe
                        navigationProps={{ navigation }}
                        recipeProps={this.state.recipes.find(findRecipe)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
