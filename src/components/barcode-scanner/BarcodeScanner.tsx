'use strict';
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './BarcodeScanner.style';

interface BarcodeState {
  flashOn: boolean;
}

interface BarcodeScannerProps {
  domProps?: object;
}

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

  onBarCodeRead(event: any) {
    Alert.alert(
      'Barcode value is' + event.data,
      'Barcode type is' + event.type,
    );
  }

  handleFlash(value: boolean) {
    if (value === true) {
      this.setState({ flashOn: false });
    } else {
      this.setState({ flashOn: true });
    }
  }

  render() {
    return (
      <View style={styles.container} {...this.props.domProps}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={this.onBarCodeRead}></RNCamera>
      </View>
    );
  }
}
