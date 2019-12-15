import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewPagerType from '@react-native-community/viewpager';
import { widthPercentageToDP } from '../../styles/config/mixins';
import styles from '../../styles/TabViewPager';

const ViewPager = require('@react-native-community/viewpager'); // eslint-disable-line @typescript-eslint/no-var-requires

export type tab = {
    id: number;
    text: string;
};

interface Props {
    tabs: tab[];
}

interface State {
    currentViewPageIndex: number;
}

/**
 * tabViewPager screen
 */
export default class TabViewPager extends React.Component<Props, State> {

    viewPager = React.createRef<ViewPagerType>();

    constructor(props: Props) {
        super(props);
    }
    readonly state: State = {
        currentViewPageIndex: 0
    };

    setupTextViews() {
        return this.props.tabs.map((type) =>
            <Text key={type.id} style={[styles.tabs, (this.state.currentViewPageIndex == type.id) ? styles.activeText : null]}
                onPress={() => this.onTabClicked(type.id)}> {type.text} </Text>);

    }

    onTabClicked(index: number) {
        this.setState({ currentViewPageIndex: index });
        this.viewPager.current!.setPage(index);
    }

    // Test page's will be replaced later.
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabSelection}>
                    {this.setupTextViews()}
                </View>
                <ViewPager
                    style={styles.containerViewPager}
                    initialPage={0}
                    ref={this.viewPager}
                    onPageSelected={(EventHandle: any) => this.pageChanged(EventHandle.nativeEvent.position)}
                >
                    <ScrollView style={styles.scrollViewPager}>
                        <View style={styles.innerViewPagerContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AADHLgb.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=768&y=266' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://i.pinimg.com/originals/3e/b2/2a/3eb22a625ac40c96ad519d64964c1cb1.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://i.pinimg.com/236x/9d/c9/2d/9dc92d8fef435ab466517ed2cd2678b7.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://pbs.twimg.com/profile_images/839448234758029312/ex2ZSY0v_400x400.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://66.media.tumblr.com/tumblr_md59pzVjMt1romx5eo1_400.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://girlsracy.files.wordpress.com/2019/08/image-9.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://ae01.alicdn.com/kf/HTB1MX3adiMnBKNjSZFzq6A_qVXai/Quality-Snake-Print-Sexy-Women-Fitness-Leggings-Push-Up-High-Waist-Workout-Legging-Sporting-pants-hot.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://imgix.bustle.com/elite-daily/2014/02/06064606/Stocksy_txp9084736eUxc000_Small_461075.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://steemitimages.com/p/5ShzsKQoqetnfxsv9g24K2amryCs4erSjyjywHMAwi1rQkhjnzmTBE3BLsqz3Pzs68YwRpYCswN8828LUrWxYVoCKczCvcCMB1PSbBEXr6ThsNYgQbY6vscq69UqakhNkJEhczgz2pMbAmBrTBbDMGar?format=match&mode=fit&width=640' }}
                            />
                        </View>
                    </ScrollView>
                    <View key="2">
                        <Text>Second page</Text>
                    </View>
                </ViewPager>
            </View>
        );
    }

    private pageChanged(e: Event) {
        this.setState({ currentViewPageIndex: e as number });
    }
}
