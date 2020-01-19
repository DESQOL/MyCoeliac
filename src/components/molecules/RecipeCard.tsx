import React from 'react';
import { Text, Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { Black, Gray } from '../../styles/config/Colors';
import {
    NavigationActions,
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    StackActions
} from 'react-navigation';
import styles from '../../styles/components/molecules/RecipeCard';

interface RecipeCardProps {
    list: any;
    recipeIdProps?: any;
    navigationProps: {
        navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    };
}

export default function RecipeCard( { list, recipeIdProps, navigationProps }: RecipeCardProps): JSX.Element {
    const { navigation } = navigationProps;

    function getRecipeId(id: number): number {
        recipeIdProps = id;
        console.log('recipeCard id: ', recipeIdProps);
        return recipeIdProps;
    }

    function navigateToRecipe() {
        navigation.dispatch(StackActions.push({
            routeName: 'InitialScreen'
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

            <Image
                source={{ uri: list.image }}
                style={styles.image}
            />

            <View style={styles.recipeContentContainer}>
                <View>
                    <Text style={styles.title}>
                        {list.title}
                    </Text>
                    <Text>
                        {list.duration}
                    </Text>
                </View>

                <Button
                    buttonStyle={styles.button}
                    icon={<Icon
                        color={Gray}
                        name="plus"
                        size={15}
                        style={styles.plusLogo}
                    />}
                    title="Save"
                    titleStyle={{ color: Gray }}
                    type="outline"
                />

                <View style={styles.readContentContainer}>
                    <View style={styles.divider} />
                    <Button
                        buttonStyle={styles.readButton}
                        icon={<IconFA
                            name="angle-right"
                            size={22}
                            style={styles.arrowLogo}
                        />}
                        iconRight
                        onPress={() => {
                            getRecipeId(list.id) ? navigateToRecipe() : null;
                        }}
                        title="Read more"
                        titleStyle={{ color: Black }}
                        type="clear"
                    />
                </View>
            </View>
        </View>
    );
}
