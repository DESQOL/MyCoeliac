import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Black } from '../../styles/config/Colors';
import { scaleSize } from '../../styles/config/Mixins';
import { FONT_SIZE_14 } from '../../styles/config/Fonts';

interface Props {
    onPress: () => void;
}

interface State {
    accepted: boolean;
}

// Test styling, will be replaced later.
const styles = StyleSheet.create({
    boldText: {
        fontSize: FONT_SIZE_14,
        fontWeight: 'bold',
    },
    bullet: {
        width: 10
    },
    bulletText: {
        flex: 1
    },
    content: {
        flex: 6,
    },
    descriptionText: {
        marginTop: scaleSize(20)
    },
    placeholderFlex:{
        flex:1
    },
    primaryButton: {
        alignSelf: 'center',
        width: '90%'
    },
    skipText: {
        alignSelf: 'center',
        color: Black,
        flex: 1,
        fontWeight: 'bold',
        marginTop: scaleSize(20)
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
    topPart: {
        flex: 4,
    }
});

/**
 * Onboarding screen
 */
class PermissionScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            accepted: false
        };
    }

    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.placeholderFlex}>
                <View style={styles.topPart}>
                    <Text style={styles.title}> Permissions </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.bullet}>

                    </View>
                    <View style={styles.bulletText}>
                        <Text >
                            <Text>{'\u2022' + ' '}</Text>
                            <Text style={styles.boldText}>Network:     </Text>
                            <Text >Used for registering, logging in, sending data back for the recipes, receiving data from the recipes, storing profile data and receiving profile data. </Text>
                        </Text>
                        <Text style={styles.descriptionText}>
                            <Text>{'\u2022' + ' '}</Text>
                            <Text style={styles.boldText}>Storage:     </Text>
                            <Text >Will be used to store an generated image of the QR code when making an recipe.</Text>
                        </Text>
                        <Text style={styles.descriptionText}>
                            <Text>{'\u2022' + ' '}</Text>
                            <Text style={styles.boldText}>Camera:     </Text>
                            <Text >Is needed for scanning the barcodes and thereby identify if a recipe contains gluten or not.</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.primaryButton}>
                    <Button
                        onPress={() => {this.props.onPress();}}
                        style={styles.primaryButton}
                        iconRight
                        title='Go to next screen'
                    />
                </View>
                <View style={styles.skipText}>

                </View>
                {/* <Text style={styles.skipText} onPress={() => { this.props.onPress() }}>
                    Skip</Text> */}

            </View>
        );
    }
}

export default PermissionScreen;
