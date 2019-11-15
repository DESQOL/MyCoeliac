import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,

} from 'react-native';
import { Button } from 'react-native-elements';
import ViewPagerType, { ViewPagerOnPageSelectedEventData } from '@react-native-community/viewpager';
const ViewPager = require('@react-native-community/viewpager');
import { BlueIvy, Green, White, Black } from '../../styles/colors';
import { name } from '../../../app.json';


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
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            iconRight
                            title="Button with right icon"
                        />
                        <Text style={styles.skipText} onPress={this.handleViewPagerClick}>
                        Skip</Text>
                    </View>
                </View>


                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>

                <View style={styles.pageStyle} key="3">
                    <View style={styles.pageContainer}>
                        <View style={styles.topPart}>
                            <Text style={styles.HeaderText}> We use these permissions for</Text>
                        </View>
                        <Button
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            iconRight
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
        console.log(this.props);
        try{
        await AsyncStorage.setItem('onboarding','true');
    
        this.props.navigation.navigate('Auth');
        } catch(error){
            console.log(error);
        }
    }


}

const styles = StyleSheet.create({

    viewPager: {
        flex: 1
    },
    pageStyle: {
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: BlueIvy
    },
    HeaderText: {
        textAlign: 'center',
        color: Black,
        fontWeight: 'bold',
        fontSize: 37
    },
    pageContainer: {
        flex: 0.9,
        alignItems: 'center',

        backgroundColor: Green,
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