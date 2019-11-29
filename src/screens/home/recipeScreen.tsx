import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { ListItem, SearchBar, Button } from 'react-native-elements';

import RecipeList from '../../components/recipe_list/recipeList';
import NavBar from '../../components/navbar/navBar';

interface RecipeScreenState {
  search: string;
  recipes: any;
}

interface RecipeScreenProps {
  props?: {};
}

const dummyList = [
  {
    id: 1,
    image:
      'https://www.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-c-1200.jpg',
    title: 'Banana bread',
    description: '...',
    rating: 4,
  },
  {
    id: 2,
    image: null,
    title: 'Chocolate cake',
    description: '...',
    rating: 3,
  },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
});

export default class RecipeScreen extends React.Component<
  RecipeScreenProps,
  RecipeScreenState
> {
  constructor(props: RecipeScreenProps) {
    super(props);
    console.log('test');
  }

  componentDidMount() {
    this.setState({
      search: '',
      recipes: dummyList,
    });
  }

  public readonly state: RecipeScreenState = {
    search: '',
    recipes: dummyList,
  };

  updateSearch = (search: any) => {
    if (search === '') {
      this.setState({
        recipes: dummyList,
        search: search,
      });
      return;
    }
    const newData = this.state.recipes.filter(function(recipe: any) {
      const recipeData = recipe.title.toUpperCase();
      const searchData = search.toUpperCase();
      return recipeData.indexOf(searchData) > -1;
    });
    this.setState({
      recipes: newData,
      search: search,
    });
  };

  render(): JSX.Element {
    return (
      <SafeAreaView>
        <NavBar />
        <View>
          <Text style={styles.title}>Recipes</Text>
          <SearchBar
            placeholder="Search recipes"
            onChangeText={search => this.updateSearch(search)}
            value={this.state.search}
            lightTheme={true}
          />
          <RecipeList recipes={this.state.recipes} />
          <Button title="Add new recipe" />
        </View>
      </SafeAreaView>
    );
  }
}
