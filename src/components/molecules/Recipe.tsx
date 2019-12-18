import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GrayLightest } from '../../styles/config/Colors';
import { FONT_SIZE_14, FONT_SIZE_17, FONT_SIZE_20 } from '../../styles/config/Fonts';

import SeparatorPipe from '../atoms/SeparatorPipe';

interface AppProps {
    recipeProps: any;
}

const starRating: any = [];

const styles = StyleSheet.create({
    description: {
        fontSize: FONT_SIZE_14,
    },

    duration: {
        position: 'absolute',
    },

    logo: {
        alignSelf: 'center',
        height: 200,
        width: '100%',
    },

    ratingContainer: {
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
    },

    recipeCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 28,
        paddingRight: 28,
    },

    recipeData: {
        marginBottom: 25,
    },

    recipeListItem: {
        backgroundColor: GrayLightest,
        padding: 5,
    },

    recipeListItemContent: {
        fontSize: 14,
        marginLeft: 8,
        marginRight: 8,
    },

    subtitle: {
        fontSize: FONT_SIZE_17,
        marginBottom: 10,
        marginTop: 10,
    },

    title: {
        fontSize: FONT_SIZE_20,
        marginBottom: 10,
        marginTop: 10,
    },

});

function renderRating(rating: number) {
    for (let j = 0; j < rating; j++) {
        starRating[j] = <Icon name='star' size={20}/>;

        if (rating < 5) {
            for (let i = rating; i < 5; i++) {
                starRating[i] = <Icon name='star-o' size={20}/>;
            }
        }
    }
}

export default function Recipe(props: AppProps): JSX.Element {

    renderRating(props.recipeProps.rating || 0);

    return (<View style={styles.recipeCardContainer}>
        <Text style={styles.title}>{props.recipeProps.title}</Text>

        <Image
            style={styles.logo}
            source={{ uri: props.recipeProps.image }}
            defaultSource={require('../../assets/images/no-image-available.jpg')}/>

        <View style={styles.recipeData}>
            <Text style={styles.duration}>{props.recipeProps.duration}</Text>

            <View style={styles.ratingContainer}>{starRating}</View>
        </View>

        <Text>{props.recipeProps.description}</Text>

        <Text style={styles.subtitle}>Ingredients</Text>
        <FlatList
            data={props.recipeProps.ingredients}
            renderItem={({ item }: { item: any }) => <ListItem
                containerStyle={styles.recipeListItem}
                titleStyle={styles.recipeListItemContent}
                title={item.amount + ' ' + item.name}/>}
            ItemSeparatorComponent={SeparatorPipe}
            keyExtractor={(item) => item.id.toString()}
        />

        <Text style={styles.subtitle}>Instructions</Text>
        <Text style={styles.description}>{props.recipeProps.instructions}</Text>
    </View>);
}
