import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Black } from '../../styles/config/Colors';
import { name } from '../../../app.json';
import { scaleSize } from '../../styles/config/Mixins';

interface Props {
    onPress: () => void;
}

interface State {
    accepted: boolean;
}

// Test styling, will be replaced later.
const styles = StyleSheet.create({
    alignText: {
        textAlign: 'center'
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
    placeholderFlex: {
        flex: 1
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
class WelcomeScreen extends React.Component<Props, State> {

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
                    <Text style={styles.title}> Welcome to {'\n' + name}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.bullet}>
                    </View>
                    <View style={styles.bulletText}>
                        <Text style={styles.alignText}>
                            Welcome to MyCoeliac! in this app we try to.................................................................
                        </Text>
                    </View>
                </View>
                <View style={styles.primaryButton}>
                    <Button
                        onPress={() => { this.props.onPress(); }}
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

export default WelcomeScreen;
