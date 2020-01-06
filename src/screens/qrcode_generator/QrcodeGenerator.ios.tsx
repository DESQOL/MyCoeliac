import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';

interface QrProps {
  value: string;
}
/**
 * Component for generating an qr code.
 * Make the component invissble or hidden and call the requestcamera which makes the qr code
 * and saves it to local storage when its given permissions
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
                  // alert success?
              });
       
      });
  }

}