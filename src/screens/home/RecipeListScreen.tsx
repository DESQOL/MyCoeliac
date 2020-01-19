import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';
import styles from '../../styles/screens/RecipeListScreen';
import AsyncStorage from '@react-native-community/async-storage';

import RecipeList from '../../components/organisms/RecipeList';
import NavHeader from '../../components/atoms/NavHeader';

interface RecipeScreenState {
    search: string;
    recipes: any;
    filteredRecipes: any;
    recipesLoaded: boolean;
    recipeId: any;
    recipeList: number;
    isEnded?: boolean;
    isLoading?: boolean;
    isRefreshed?: boolean;
}

interface RecipeScreenProps {
    props?: {};
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class RecipeListScreen extends React.Component<RecipeScreenProps, RecipeScreenState> {
    constructor(props: RecipeScreenProps) {
        super(props);
        console.log('test');
        this.getListofRecipes()
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.setState({
            search: '',
            recipes: [],
            recipeList: 1,
        });
    }

    public readonly state: RecipeScreenState = {
        search: '',
        recipes: [],
        filteredRecipes: [],
        recipesLoaded: false,
        recipeId: false,
        recipeList: 1,
        isLoading: false,
        isRefreshed: false,
        isEnded: false,
    };

    getRecipeId = (data: any) => {
        if (data) {
            this.setState({ recipeId: true });
        } else {
            this.setState({ recipeId: false });
        }
    };

    // detectEndOfPage = (data: any) => {
    //     /*
    //      * console.log('end of page, recipelistscreen')
    //      * console.log('data: ', data);
    //      * if (data === true) {
    //      *     this.setState({
    //      *         isEnded: true
    //      *     });
    //      * }
    //      */
    // };

    updateSearch = (search: any) => {
        if (search === '') {
            this.setState({
                recipes: this.state.filteredRecipes,
                search: search,
            });
            return;
        }
        const newData = this.state.filteredRecipes.filter((recipe: any) => {
            const recipeData = recipe.title.toUpperCase();
            const searchData = search.toUpperCase();
            return recipeData.indexOf(searchData) > -1;
        });
        this.setState({
            recipes: newData,
            search: search,
        });
    };

    onRefresh = () => {
        // Restart pagination on refresh of page
        this.setState({
            isRefreshed: true,
        });

    };

    getListofRecipes = async () => {
        const token = await AsyncStorage.getItem('token');

        fetch(`https://desqol.hihva.nl/recipe/search?limit=10&offset=1&api_key=${token}`)
            .then(recipeData => recipeData.json())
            .then(data => {
                // console.log(data.recipes);
                if (data.recipes) {
                    this.setState({
                        recipesLoaded: true
                    });

                    this.setState({
                        recipes: data.recipes,
                        filteredRecipes: data.recipes
                    });
                }
            });
    };

    loadRecipes = async () => {
        this.setState({
            isLoading: true
        });

        const token = await AsyncStorage.getItem('token');

        // Call request for initial set of recipes
        const getRecipesUrl = `https://desqol.hihva.nl/recipe/search?limit=10&offset=${this.state.recipeList}&api_key=${token}`;

        fetch(getRecipesUrl)
            .then(recipesData => recipesData.json())
            .then(data => {
                const newRecipes = this.state.filteredRecipes.concat(data.recipes);
                this.setState({
                    filteredRecipes: newRecipes,
                    recipes: newRecipes
                });

            });
    };

    loadMoreRecipes = () => {
        const recipeOffset = 10;

        // Retrieve next set of recipes to be loaded
        this.setState({
            recipeList: this.state.recipeList + recipeOffset
        }, () => this.loadRecipes());
    };

    render(): JSX.Element {
        return (
            <SafeAreaView style={styles.screenContainer}>
                <NavHeader
                    navIcon={false}
                    title="MyCoeliac"
                />
                <View style={styles.container}>
                    <SearchBar
                        containerStyle={styles.searchbar}
                        inputContainerStyle={styles.input}
                        lightTheme
                        onChangeText={search => this.updateSearch(search)}
                        placeholder="Search recipes"
                        value={this.state.search}
                    />
                    <RecipeList
                        navigation={this.props.navigation}
                        onEndReached={() => this.loadMoreRecipes()}
                        recipeIdProps={this.getRecipeId}
                        recipes={this.state.recipesLoaded ? this.state.recipes : null}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
