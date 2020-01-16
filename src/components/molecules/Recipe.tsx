import * as React from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import styles from '../../styles/components/molecules/Recipe';

import SeparatorPipe from '../atoms/SeparatorPipe';
import QrcodeGenerator from '../../../src/screens/qrcode_generator/QrcodeGenerator.android';

interface AppProps {
    recipeProps: any;
}

export default class Recipe extends React.Component<AppProps, {}> {
    private qr: React.RefObject<QrcodeGenerator>;

    constructor(props: AppProps) {
        super(props)
        this.qr = React.createRef();
    }

    // renderRating(props.recipeProps.rating || 0);
    render() {
        if (this.props.recipeProps) {
            console.log(this.props.recipeProps.id);
        }
        return (
            <View style={styles.recipeContainer}>
                {this.props.recipeProps ?
                    <ScrollView style={styles.recipeContentContainer}>
                        <Text style={styles.title}>{this.props.recipeProps.title}</Text>
                        <Image
                            style={styles.logo}
                            source={{ uri: this.props.recipeProps.image }}
                            defaultSource={require('../../assets/images/no-image-available.jpg')}
                        />

                        <View style={styles.recipeData}>
                            <Text style={styles.duration}>{this.props.recipeProps.readyInMinutes} minutes</Text>

                            {/* <View style={styles.ratingContainer}>{starRating}</View> */}
                        </View>

                        {/* <Text>{props.recipeProps.description}</Text> */}

                        <Text style={styles.subtitle}>Ingredients</Text>
                        <FlatList
                            data={this.props.recipeProps.extendedIngredients}
                            renderItem={({ item }: { item: any }) => <ListItem
                                containerStyle={styles.recipeListItem}
                                titleStyle={styles.recipeListItemContent}
                                title={item.amount + ' ' + item.name} />}
                            ItemSeparatorComponent={SeparatorPipe}
                            keyExtractor={(item) => item.id.toString()}
                        />

                        <Text style={styles.subtitle}>Instructions</Text>
                        <Text style={styles.description}>{this.props.recipeProps.instructions}</Text>
                        <View style={styles.qrgeneratorview}>
                            <QrcodeGenerator value={String(this.props.recipeProps.id)} ref={this.qr} />
                        </View>
                        <View style={styles.buttonqrgenerator}>
                            <Button title="Create QR" onPress={() => this.qr.current?.requestCameraPermission()} />
                        </View>
                    </ScrollView>
                    : null}
            </View>);
    }
}
