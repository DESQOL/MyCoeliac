'use strict';
import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../../styles/screens/BarcodeScanner';
import { NavigationScreenProp, NavigationState, NavigationParams, StackActions, NavigationActions } from 'react-navigation';

type BarcodeState = {
    flashOn: boolean;
};

type BarcodeScannerProps = {
    domProps?: {};
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

export default class BarcodeScanner extends Component<
BarcodeScannerProps,
BarcodeState
> {
    camera: RNCamera | null;
    constructor(props: BarcodeScannerProps) {
        super(props);
        this.handleFlash = this.handleFlash.bind(this);
        this.camera = null;   
        this.state = {
            flashOn: false,
        };
    }

    onBarCodeRead(event: any): void {
        Alert.alert(
            'Barcode value is' + event.data,
            'Barcode type is' + event.type,
        );
    }

    handleFlash(isFlashModeOn: boolean): void {
        if (isFlashModeOn === true) {
            this.setState({ flashOn: false });
        } else {
            this.setState({ flashOn: true });
        }
    }

    barcodeRecognized = ( barcode: any) => {
        this.navigateToRecipe(Number(barcode.barcodes[0].data));
    };
  
    navigateToRecipe(id: number) {
        if(id <= 0){
            return;
        }
        this.props.navigation.dispatch(StackActions.push({
            routeName: 'InitialScreen'
        }));

        this.props.navigation.navigate({
            routeName: 'Recipe',
            action: NavigationActions.navigate({
                routeName: 'RecipeScreen',
                params: {
                    recipeId: id
                }
            })
        });

        return;
    }
    render(): JSX.Element {
        return (
            <View
                style={styles.container}
                {...this.props.domProps}
            >
                <RNCamera
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    captureAudio={false}
                    flashMode={
                        this.state.flashOn
                            ? RNCamera.Constants.FlashMode.on
                            : RNCamera.Constants.FlashMode.off
                    }
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                    ref={(ref: RNCamera): void => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                >
                    {// }onBarCodeRead={this.onBarCodeRead}}
                    }
                </RNCamera>
                <View style={styles.bottomOverlay}>
                    <TouchableOpacity
                        onPress={(): void => this.handleFlash(this.state.flashOn)}
                    >
                        <Image
                            source={
                                this.state.flashOn === true
                                    ? require('../../assets/images/flash_on.png')
                                    : require('../../assets/images/flash_off.png')
                            }
                            style={styles.cameraIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
