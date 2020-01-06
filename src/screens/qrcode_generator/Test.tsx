import React from 'react';
import { View } from 'react-native';
import QrCodeGenerator from './QrcodeGenerator';

export default class Test extends React.Component<{}, {}> {

    private qr: React.RefObject<QrCodeGenerator>;
    constructor(){
        super({});
        this.qr = React.createRef();
    }

    /*
     *         <Button title="test" onPress={() => this.qr.current?.requestCameraPermission}/>
     *           Make a button and make the qCoregenerator invisble it will store outmaticly to the storage after permissions are given.
     */

    render() {
        return (
            <View>
                <QrCodeGenerator  value="test" ref={this.qr}/>
            </View>
    
        );
    };
}

