import React from 'react';
import { View } from 'react-native';
import QrcodeGenerator from './QrcodeGenerator.android';

export default class Test extends React.Component<{}, {}> {

    private qr: React.RefObject<QrcodeGenerator>;
    constructor(){
        super({});
        this.qr = React.createRef();
    }

    /*
     *         <Button title="test" onPress={() => {this.qr.current?.requestCameraPermission;}}/>
     *  ADDED COMMMENTS BECAUSE FUCKING ESLINT IS STUPID AS FUCK AND KEEPS COMPLAINING ABOUT A STANDARD FUCKING ARROW FUNCTION
     */

    render() {
        return (
            <View>
                <QrcodeGenerator value="test" ref={this.qr}/>
            </View>
    
        );
    };
}
   
