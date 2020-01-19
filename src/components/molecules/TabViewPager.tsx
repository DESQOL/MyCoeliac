import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewPagerType from '@react-native-community/viewpager';
import styles from '../../styles/components/molecules/TabViewPager';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ViewPager = require('@react-native-community/viewpager');

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
                                source={{ uri: 'https://spoonacular.com/recipeImages/689502-556x370.jpg' }}
                            />
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://spoonacular.com/recipeImages/689502-556x370.jpg' }}
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
