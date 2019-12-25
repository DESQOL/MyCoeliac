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
     *         <Button title="test" onPress={() => this.qr.current?.requestCameraPermission}/>
     *           This is how you would use it.
     *  ADDED IT IN COMMENTS BECAUSE FUCKING ESLINT + REACT NATIVE + TYPESCRIPT IS A CANCEROUS FUCKING TUMOR
     *
     * 
     */

    render() {
        return (
            <View>
                <QrcodeGenerator value="test" ref={this.qr}/>
            </View>
    
        );
    };
}
   
