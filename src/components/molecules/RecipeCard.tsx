import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { Black, Gray, GrayLighter, White } from '../../styles/config/colors';
import {
    NavigationActions,
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    StackActions
} from 'react-navigation';

interface RecipeCardProps {
    list: any;
    recipeIdProps?: any;
    navigationProps: {
        navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    };
}

const styles = StyleSheet.create({
    arrowLogo: {
        marginLeft: 8
    },

    button: {
        borderColor: Gray,
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    container: {
        backgroundColor: White,
        display: 'flex',
        elevation: 5,
        flexDirection: 'row',
        flex: 0,
        height: 300,
        margin: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        shadowColor: Gray,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        width: 350

    },

    divider: {
        borderBottomColor: GrayLighter,
        borderBottomWidth: 1,
        width: '100%',
    },

    image: {
        alignSelf: 'center',
        backgroundColor: GrayLighter,
        flex: 1,
        height: '100%',
        marginRight: 5,
    },

    plusLogo: {
        marginRight: 8
    },

    readButton: {
        paddingLeft: 0
    },

    readContentContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        width: '100%'
    },

    recipeContentContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
    },

    title: {
        marginBottom: 10,
        marginTop: 10,
    }
});

export default function RecipeCard( { list, recipeIdProps, navigationProps }: RecipeCardProps): JSX.Element {
    const { navigation } = navigationProps;

    function getRecipeId(id: number) {
        recipeIdProps = id;
        console.log('recipeCard id: ', recipeIdProps);
        return recipeIdProps;
    }

    function navigateToRecipe() {
        navigation.dispatch(StackActions.push({
            routeName: 'HomeScreen'
        }));

        navigation.navigate({
            routeName: 'Recipe',
            action: NavigationActions.navigate({
                routeName: 'RecipeScreen',
                params: {
                    recipeId: getRecipeId(list.id)
                }
            })
        });

        return;
    }

    return (
        <View style={styles.container}>

            <Image source={{ uri: list.image }} style={styles.image}/>

            <View style={styles.recipeContentContainer}>
                <View>
                    <Text style={styles.title}>{list.title}</Text>
                    <Text>{list.duration}</Text>
                </View>

                <Button
                    buttonStyle={styles.button}
                    titleStyle={{ color: Gray }}
                    title={'Save'}
                    icon={<Icon name={'plus'} color={Gray} size={15} style={ styles.plusLogo }/>}
                    type={'outline'}/>

                <View style={styles.readContentContainer}>
                    <View style={styles.divider} />
                    <Button
                        buttonStyle={styles.readButton}
                        titleStyle={{ color: Black }}
                        title={'Read more'}
                        icon={<IconFA name={'angle-right'} size={22} style={ styles.arrowLogo }/>}
                        iconRight={true}
                        type={'clear'}
                        onPress={() => {
                            // TODO: Add error/warning page if id does not exist(?)
                            getRecipeId(list.id) ? navigateToRecipe() : null;
                        }
                        }
                    />
                </View>
            </View>
        </View>
    );
}
