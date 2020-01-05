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
     * 
     * 
     * 
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
   
describe('Registration', () => {
    
    it('Registration and get token', async () => {
        await device.reloadReactNative();
        await expect(element(by.id('email'))).toBeVisible();
        await expect(element(by.id('firstname'))).toBeVisible();
        await expect(element(by.id('lastname'))).toBeVisible();
        await expect(element(by.id('password'))).toBeVisible();
        await expect(element(by.id('confirm'))).toBeVisible();

        await expect(element(by.id('email'))).typeText('test@gmail.com');
        await expect(element(by.id('firstname'))).typeText('jeff');
        await expect(element(by.id('lastname'))).typeText('riemsdijk');
        await expect(element(by.id('password'))).typeText('Test1234!');
        await expect(element(by.id('confirm'))).typeText('Test1234!');
        await element(by.text('register')).tap();
      
        await expect(element(by.text('Welcome'))).toBeVisible();
    });
  
});
