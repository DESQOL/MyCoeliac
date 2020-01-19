import * as React from 'react';
import { Text, View, Image, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import styles from '../../styles/components/molecules/Recipe';

import SeparatorPipe from '../atoms/SeparatorPipe';
import QrcodeGenerator from '../../../src/screens/qrcode_generator/QrcodeGenerator.android';

import {
    NavigationActions,
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

interface AppProps {
    recipeProps: any;
    navigationProps: {
        navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    };
}

export default class Recipe extends React.Component<AppProps, {}> {
    private qr: React.RefObject<QrcodeGenerator>;

    constructor(props: AppProps) {
        super(props);
        this.qr = React.createRef();
    }

    // renderRating(props.recipeProps.rating || 0);
    render() {
        if (this.props.recipeProps) {
            console.log(this.props.recipeProps.id);
        }

        const { navigation } = this.props.navigationProps;
        const recipe = this.props.recipeProps;

        function navigateToComments() {

            navigation.navigate({
                routeName: 'Recipe',
                action: NavigationActions.navigate({
                    routeName: 'CommentScreen',
                    params: {
                        recipeId: recipe.id
                    }
                })
            });

            return;
        }

        return (
            <View style={styles.recipeContainer}>
                {this.props.recipeProps ?
                    <ScrollView style={styles.recipeContentContainer}>
                        <Text style={styles.title}>
                            {this.props.recipeProps.title}
                        </Text>
                        <Image
                            defaultSource={require('../../assets/images/no-image-available.jpg')}
                            source={{ uri: this.props.recipeProps.image }}
                            style={styles.logo}
                        />

                        <View style={styles.recipeData}>
                            <Text style={styles.duration}>
                                {this.props.recipeProps.readyInMinutes}
                                {' '}
minutes
                            </Text>

                            {/* <View style={styles.ratingContainer}>{starRating}</View> */}
                        </View>

                        <Text style={styles.subtitle}>
Ingredients
                        </Text>
                        <FlatList
                            data={this.props.recipeProps.extendedIngredients}
                            ItemSeparatorComponent={SeparatorPipe}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }: { item: any }) => (<ListItem
                                containerStyle={styles.recipeListItem}
                                title={`${item.measures.metric.amount} ${item.measures.metric.unitShort} ${item.name}`}
                                titleStyle={styles.recipeListItemContent}
                            />)}
                        />

                        <Text style={styles.subtitle}>
Instructions
                        </Text>
                        <FlatList
                            data={this.props.recipeProps.analyzedInstructions}
                            keyExtractor={(item: any) => item.id.toString()}
                            renderItem={({ item }: { item: any }) => {
                                let items = [];
                                if (item.steps) {
                                    items = item.steps.map((data: any) => {
                                        return (<View key={data.id}>
                                            <Text style={styles.description}>
                                                {`${data.step} \n`}
                                            </Text>
                                        </View>);
                                    });
                                    return items;
                                }
                            }}
                        />

                        <View style={styles.commentButtonContainer}>
                            <TouchableWithoutFeedback onPress={navigateToComments}>
                                <Text style={styles.commentButton}>
                                    View all or post comments
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.qrgeneratorview}>
                            <QrcodeGenerator
                                ref={this.qr}
                                value={String(this.props.recipeProps.id)}
                            />
                        </View>
                        <View style={styles.buttonqrgenerator}>
                            <Button
                                onPress={() => this.qr.current ? this.qr.current.requestCameraPermission() : null}
                                title="Create QR"
                            />
                        </View>
                    </ScrollView>
                    : null}
            </View>);
    }
}
