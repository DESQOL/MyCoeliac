import React from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
import { Button } from 'react-native-elements';
import ViewPagerType from '@react-native-community/viewpager';
const ViewPager = require('@react-native-community/viewpager');
import {  Black } from '../../styles/colors';
import { name } from '../../../app.json';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

interface State {
    pagePosition: number
}

interface event{
    e:{
        nativeEvent:{
            position:Event;
        };
    }
}

/**
 * Onboarding screen 
 */

class onboardingScreen extends React.Component<Props,State> {
    viewPager = React.createRef<ViewPagerType>()
      
    constructor(props: Props) {
        super(props);
        this.pageChanged = this.pageChanged.bind(this);
        this.handleViewPagerClick = this.handleViewPagerClick.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.state =  {
            pagePosition: 0
        };
        console.log(this.props);
         
    }

    // Test page's will be replaced later.
    render() {
        return (
            <ViewPager
                style={styles.viewPager}
                initialPage={0}
                ref={this.viewPager}
                onPageSelected={(event: any) => this.pageChanged(event.nativeEvent.position)}
            >
                
                <View style={styles.pageStyle} key="1">
                    <View style={styles.pageContainer}>
                        <View style={styles.topPart}>
                            <Text style={styles.HeaderText}> Welcome to {"\n" + name}</Text>
                        </View>
                        <Button
                            iconRight
                            title="Button"
                        />
                        <Text style={styles.skipText} onPress={this.handleViewPagerClick}>
                        Skip</Text>
                    </View>
                </View>


                <View style={styles.pageStyle} key="2">
                    <View style={styles.pageContainer}>
                        <View style={styles.topPart}>
                            <Text style={styles.HeaderText}> Welcome to {"\n" + name}</Text>
                        </View>
                        <Button
                            iconRight
                            title="Button"
                        />
                        <Text style={styles.skipText} onPress={this.handleViewPagerClick}>
                        Skip</Text>
                    </View>
                </View>

                <View style={styles.pageStyle} key="3">
                    <View style={styles.pageContainer}>
                        <View style={styles.topPart}>
                            <Text style={styles.HeaderText}> We use these permissions for</Text>
                        </View>
                        <Button
                            title="Done"
                            onPress={this.handleLastPage}
                        />
                        <Text style={styles.skipText} >
                        Skip</Text>
                    </View>
                </View>
            </ViewPager>
        );
    }

    private handleViewPagerClick(){
        this.viewPager.current!.setPage(this.state.pagePosition + 1)
    }

    private pageChanged(e: Event ){
        this.setState({pagePosition: e as number}, () => 
        console.log(this.state.pagePosition));
    }

    async handleLastPage(){
        try{
        await AsyncStorage.setItem('onboarding','true');
        this.props.navigation.navigate('Auth');
        } catch(error){
            console.log(error);
        }
    }

}

// Test styling, will be replaced later.
const styles = StyleSheet.create({

    viewPager: {
        flex: 1
    },
    pageStyle: {
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    HeaderText: {
        textAlign: 'center',
        color: Black,
        fontWeight: 'bold',
        fontSize: 37
    },
    pageContainer: {
        flex: 0.9,
        alignItems: 'center'
    },
    topPart: {
        flex: 9
    },
    skipText: {
        flex: 1,
        color: Black,
        fontWeight: 'bold'
    }
})
export default onboardingScreen