'use strict';
import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../../styles/screens/BarcodeScanner';

type BarcodeState = {
  flashOn: boolean;
};

type BarcodeScannerProps = {
  domProps?: {};
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

  render(): JSX.Element {
      return (
          <View style={styles.container} {...this.props.domProps}>
              <RNCamera
                  ref={(ref: RNCamera): void => {
                      this.camera = ref;
                  }}
                  captureAudio={false}
                  style={styles.preview}
                  flashMode={
                      this.state.flashOn
                          ? RNCamera.Constants.FlashMode.on
                          : RNCamera.Constants.FlashMode.off
                  }
                  type={RNCamera.Constants.Type.back}
                  androidCameraPermissionOptions={{
                      title: 'Permission to use camera',
                      message: 'We need your permission to use your camera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                  }}
                  onBarCodeRead={this.onBarCodeRead}></RNCamera>
              <View style={styles.bottomOverlay}>
                  <TouchableOpacity
                      onPress={(): void => this.handleFlash(this.state.flashOn)}>
                      <Image
                          style={styles.cameraIcon}
                          source={
                              this.state.flashOn === true
                                  ? require('../../assets/images/flash_on.png')
                                  : require('../../assets/images/flash_off.png')
                          }
                      />
                  </TouchableOpacity>
              </View>
          </View>
      );
  }
}
