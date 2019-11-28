import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

interface AppProps {
    recipeProps: any;
}

const starRating: any = [];

const styles = StyleSheet.create({
    logo: {
        height: 200,
        width: 200,
    },

    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
});

function renderRating(rating: number) {
    for (let j = 0; j < rating; j++) {
        starRating[j] = <Icon name='star' size={20}/>;

        if (rating < 5) {
            for (let i = rating; i < 5; i++) {
                starRating[i] = <Icon name='star-outlined' size={20}/>;
            }
        }
    }
}

export default function RecipeCard(props: AppProps): JSX.Element {

    renderRating(props.recipeProps[0].rating || 0);

    return (<View>
        <Text>{props.recipeProps[0].title}</Text>

        <Image style={styles.logo} source={{ uri: props.recipeProps[0].image || '' }}/>

        <View style={styles.ratingContainer}>{starRating}</View>

        <Text>{props.recipeProps[0].description}</Text>

        <br/>
        <Text>Ingredients</Text>
        <br/>
        <FlatList
            data={props.recipeProps[0].ingredients}
            renderItem={({ item }: { item: any }) => <ListItem title={item.amount + ' ' + item.name}/>}
        />

        <br/>
        <Text>Instructions</Text>
        <br/>
        <Text>{props.recipeProps[0].instructions}</Text>
    </View>);
}
