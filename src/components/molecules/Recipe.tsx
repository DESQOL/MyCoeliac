import * as React from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../../styles/components/molecules/Recipe';

import SeparatorPipe from '../atoms/SeparatorPipe';

interface AppProps {
    recipeProps: any;
}

// const starRating: any = [];

/*
 * function renderRating(rating: number) {
 *     for (let j = 0; j < rating; j++) {
 *         starRating[j] = <Icon name='star' size={20}/>;
 * 
 *         if (rating < 5) {
 *             for (let i = rating; i < 5; i++) {
 *                 starRating[i] = <Icon name='star-o' size={20}/>;
 *             }
 *         }
 *     }
 * }
 */

export default function Recipe(props: AppProps): JSX.Element {

    // renderRating(props.recipeProps.rating || 0);

    return (<View style={styles.recipeContainer}>
        {props.recipeProps ?

            <ScrollView style={styles.recipeContentContainer}>
                <Text style={styles.title}>{props.recipeProps.title}</Text>

                <Image
                    style={styles.logo}
                    source={{ uri: props.recipeProps.image }}
                    defaultSource={require('../../assets/images/no-image-available.jpg')}
                />

                <View style={styles.recipeData}>
                    <Text style={styles.duration}>{props.recipeProps.readyInMinutes} minutes</Text>

                    {/* <View style={styles.ratingContainer}>{starRating}</View> */}
                </View>

                {/* <Text>{props.recipeProps.description}</Text> */}

                <Text style={styles.subtitle}>Ingredients</Text>
                <FlatList
                    data={props.recipeProps.extendedIngredients}
                    renderItem={({ item }: { item: any }) => <ListItem
                        containerStyle={styles.recipeListItem}
                        titleStyle={styles.recipeListItemContent}
                        title={item.amount + ' ' + item.name}/>}
                    ItemSeparatorComponent={SeparatorPipe}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Text style={styles.subtitle}>Instructions</Text>
                <Text style={styles.description}>{props.recipeProps.instructions}</Text>
            </ScrollView>
            : null}
    </View>);
}
