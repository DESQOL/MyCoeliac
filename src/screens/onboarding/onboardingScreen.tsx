import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,

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

/**
 * Onboarding screen 
 */

class onboardingScreen extends React.Component<Props,State> {
    viewPager = React.createRef<ViewPagerType>()
    constructor(props: Props) {
        super(props);
        this.pageChanged = this.pageChanged.bind(this);
        this.handleViewPagerClick = this.handleViewPagerClick.bind(this);
        this.state =  {
            pagePosition: 0
        };
         console.log(this.state.pagePosition)
    }


    render() {
        return (
            <ViewPager
                style={styles.viewPager}
                initialPage={0}
                ref={this.viewPager}
                onPageSelected={(e: { nativeEvent: { position: Event; }; }) => this.pageChanged(e.nativeEvent.position)}
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
            </ViewPager>
        );
    }

    private handleViewPagerClick(){
        console.log(this.state);
        console.log(this.state.pagePosition + 1);
        this.viewPager.current!.setPage(this.state.pagePosition + 1)
    }

    private pageChanged(e: Event ){
        console.log(e);
        this.setState({pagePosition: e as number}, () => 
        console.log(this.state.pagePosition));
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