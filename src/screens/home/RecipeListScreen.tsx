import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';

import { Gray, Transparent, White } from '../../styles/config/Colors';

import RecipeList from '../../components/organisms/RecipeList';
import NavHeader from '../../components/atoms/NavHeader';
import PrimaryButton from '../../components/atoms/PrimaryButton';

interface RecipeScreenState {
    search: string;
    recipes: any;
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },

    input: {
        backgroundColor: White,
        elevation: 3,
        marginBottom: 5,
        shadowColor: Gray,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        width: '100%'
    },

    screenContainer: {
        flex: 1,
    },

    searchbar: {
        backgroundColor: Transparent,
        borderBottomColor: Transparent,
        borderTopColor: Transparent,
    }
});

export default class RecipeListScreen extends React.Component<RecipeScreenProps, RecipeScreenState> {
    constructor(props: RecipeScreenProps) {
        super(props);
        console.log('test');
    }

    componentDidMount() {
        this.setState({
            search: '',
            recipes: dummyList,
            recipeList: 1,
        });
    }

    public readonly state: RecipeScreenState = {
        search: '',
        recipes: dummyList,
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

    detectEndOfPage = (data: boolean) => {
        if (data === true) {
            this.setState({
                isEnded: true
            });
        }
    };

    updateSearch = (search: any) => {
        if (search === '') {
            this.setState({
                recipes: dummyList,
                search: search,
            });
            return;
        }
        const newData = this.state.recipes.filter((recipe: any) => {
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

    loadRecipes = () => {
        // Load list of recipes

        this.setState({
            isLoading: true
        });

        // Call request for initial set of recipes
        const getRecipesUrl = 'url' + this.state.recipeList;

        fetch(getRecipesUrl)
            .then(recipesData => recipesData.json())
            .then(data => {
                if (this.state.recipeList === 1) {
                    console.log(data);
                }
            });
    };

    loadMoreRecipes = () => {
        // Load more recipes when end of page is reached

        // Hide load button when list of recipes are loading
        this.setState({
            isEnded: false
        });

        // Retrieve next set of recipes to be loaded
        this.setState({
            recipeList: this.state.recipeList + 1
        }, () => this.loadRecipes());
    };

    render(): JSX.Element {
        return (
            <SafeAreaView style={styles.screenContainer}>
                <NavHeader title={'MyCooliac'} navIcon={false}/>
                <View style={styles.container}>
                    <SearchBar
                        placeholder="Search recipes"
                        onChangeText={search => this.updateSearch(search)}
                        value={this.state.search}
                        lightTheme={true}
                        containerStyle={styles.searchbar}
                        inputContainerStyle={styles.input}
                    />
                    <RecipeList
                        recipes={this.state.recipes}
                        recipeIdProps={this.getRecipeId}
                        navigation={this.props.navigation}
                        recipeListProps={this.detectEndOfPage}
                    />
                    {/* Show button when end of content is reached */}
                    {this.state.isEnded ?
                        <PrimaryButton
                            title={'Load more...'}
                            type={'solid'}
                            onClick={this.loadMoreRecipes}/>
                        : null}
                </View>
            </SafeAreaView>
        );
    }
}
