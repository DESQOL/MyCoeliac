import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { scaleSize } from '../../styles/config/Mixins';
import { ScrollView,  } from 'react-native-gesture-handler';
import { White, PrimaryNativeBlue, ButtonDisabledColor } from '../../styles/config/Colors';

interface Props {
    onPress: () => void;
}

interface State {
    accepted: boolean;
}

const isCloseToBottom = (event: { layoutMeasurement: any; contentOffset: any; contentSize: any }) => {
    const paddingToBottom = 20;
    return event.layoutMeasurement.height + event.contentOffset.y >=
        event.contentSize.height - paddingToBottom;
};

// Test styling, will be replaced later.
const styles = StyleSheet.create({
    button: {
        backgroundColor: PrimaryNativeBlue, 
        borderRadius: 5, 
        opacity:1,
        padding: 10
    },
    buttonContainer:{
        flex:2,
        marginTop:scaleSize(50)
    },
    buttonDisabled: {
        backgroundColor: ButtonDisabledColor, 
        borderRadius: 5, 
        padding: 10 
    },
    buttonLabel: {
        alignSelf: 'center',
        color: White,
        fontSize: 14,
        fontWeight:'bold'
    },
    flexPlaceHolder: {
        flex:1,
        justifyContent:'center'
    },
    flexPlaceHolderSix:{
        flex:6,
    },
    flexPlaceHolderTwo: {
        flex:2,
    },
    flexPlaceHolwder: {
        flex:9
    },
    tcL: {
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10
    },
    tcP: {
        fontSize: 12,
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    }
});

/**
 * Onboarding screen
 */
class TermsOfAgreement extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
       
        this.state = {
            accepted: false
        };
    }

    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.flexPlaceHolwder}>
                <View style={styles.flexPlaceHolder}>
                    <Text style={styles.title}>Terms and conditions</Text>
                </View>
                <View style={styles.flexPlaceHolderTwo}></View>
                <View style={styles.flexPlaceHolderSix}>
                    <ScrollView

                        onScroll={({ nativeEvent }) => {
                            if (isCloseToBottom(nativeEvent)) {
                                this.setState({
                                    accepted: true
                                });
                            }
                        }}
                    >
                        <Text style={styles.tcP}>Welcome to our app. If you continue to browse and use this app, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern MyCoeliac’s relationship with you in relation to this app. If you disagree with any part of these terms and conditions, please do not use our app.</Text>
                        <Text style={styles.tcP}>The term ‘MyCoeliac’ or ‘us’ or ‘we’ refers to the owner of the app whose registered office is Hogeschool van Amsterdam. The term ‘you’ refers to the user or viewer of our app.</Text>
                        <Text style={styles.tcL}>{'\u2022'} The content of the pages of this app is for your general information and use only. It is subject to change without notice.</Text>

                        <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this app for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                        <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this app is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this app meet your specific requirements.</Text>
                        <Text style={styles.tcL}>{'\u2022'} This app contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                        <Text style={styles.tcL}>{'\u2022'} All trademarks reproduced in this app, which are not the property of, or licensed to the operator, are acknowledged on the app.
Unauthorised use of this app may give rise to a claim for damages and/or be a criminal offence.</Text>
                        <Text style={styles.tcL}>{'\u2022'} From time to time, this app may also include links to other apps. These links are provided for your convenience to provide further information. They do not signify that we endorse the app(s). We have no responsibility for the content of the linked app(s).</Text>
                        <Text style={styles.tcL}>{'\u2022'} Your use of this app and any dispute arising out of such use of the app is subject to the laws of the European Union.</Text>
                        <Text style={styles.tcP}>The use of this app is subject to the following terms of use</Text>
                    </ScrollView>
                    
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.onPress()}
                        style={this.state.accepted ? styles.button : styles.buttonDisabled}>
                        <Text style={styles.buttonLabel}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default TermsOfAgreement;
