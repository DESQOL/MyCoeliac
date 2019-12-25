import React from 'react'
import { View, Button, Platform } from "react-native"
import QrcodeGenerator from './QrcodeGenerator.android';


export default class Test extends React.Component<{}, {}> {

    private stepInput: React.RefObject<QrcodeGenerator>;
    constructor(){
        super({})
        this.stepInput = React.createRef();
    }
  render() {
    return (
     <View>
         <QrcodeGenerator value="test" ref={this.stepInput}/>
         <Button title="test" onPress={(()=> {this.stepInput.current?.requestCameraPermission()})}>
         </Button>
     </View>
    
    );
   };


   
 }
   
