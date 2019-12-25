import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import { ToastAndroid, Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';

interface QrProps {
  value: string;
}
/**
 * Component for generating an qr code.
 * Make the component invissble or hidden and call the fucking requestcamera which in turns makes the qr code when
 * the permissions are given.
 */
export default class QrcodeGenerator extends React.Component<QrProps, {}> {

  private svg: any;

  render() {
      return (
          <QRCode
              value={this.props.value}
              backgroundColor={'white'}
              size={100}
              logoBorderRadius={10}
              getRef={(c) => (this.svg = c)}
              logoBackgroundColor={'transparent'}
          />
      );
  };

  public saveQrToDisk() {
      this.svg.toDataURL((data: any) => {
          const date = new Date().toLocaleDateString().split('/').join('-');
          RNFS.writeFile(RNFS.DocumentDirectoryPath + '/' + date + '.png', data, 'base64')
              .then(() => {
                  return CameraRoll.saveToCameraRoll(RNFS.DocumentDirectoryPath + '/' + date + '.png', 'photo');
              })
              .then(() => {
                  if(Platform.OS !== 'ios'){ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);};
              });
       
      });
  }

  public async requestCameraPermission() {
      try {
          const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                  title: 'Permission to store image',
                  message:
            'Permission to store image',
                  buttonNeutral: 'Ask Me Later',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
              },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              this.saveQrToDisk();
          } else {
              console.log('Camera permission denied');
          }
      } catch (err) {
          console.warn(err);
      }
  }

}
