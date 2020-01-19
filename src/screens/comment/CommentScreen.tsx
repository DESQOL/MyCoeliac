import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, Text, AsyncStorage } from 'react-native';
import styles from '../../styles/screens/CommentScreen';
import { ListItem, Rating } from 'react-native-elements';
import ProfileAvatar from '../../components/atoms/ProfileAvatar';
import RateBar from '../../components/atoms/RateBar';
import PrimaryTextField from '../../components/atoms/PrimaryTextField';
import PrimaryButton from '../../components/atoms/PrimaryButton';
import NavHeader from '../../components/atoms/NavHeader';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

interface CommentScreenState {
    comments: any;
    input: string;
    rating: number;
}

interface CommentScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class CommentScreen extends Component<
CommentScreenProps,
CommentScreenState
> {
    readonly state: CommentScreenState = {
        comments: [],
        input: '',
        rating: 0
    };

    componentDidMount(): void {
        this.fetchComments().then((response) => {
            this.setState({
                comments: response.comments
            });
        });
    }

    fetchComments = async () => {
        const { navigation } = this.props;
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        const getRecipeId = JSON.stringify(navigation.getParam('recipeId', 'ID'));
        const getRecipeIdNum = parseInt(getRecipeId);
        try {
            const response = await fetch(`https://desqol.hihva.nl/recipe/${getRecipeIdNum}/comments`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-API-KEY': token,
                    'Content-Type': 'application/json',
                },
            });
            responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.log(error);
            return;
        }
    };

    updateInput(input: string): void {
        this.setState({
            input: input,
        });
    }

    updateRating(rating: number): void {
        console.log('rating: ' + rating);
        this.setState({
            rating: rating
        });
    }

    handleCommentSubmit = async () => {
        const { navigation } = this.props;
        let responseJson: any;
        const token = await AsyncStorage.getItem('token') || '';
        const getRecipeId = JSON.stringify(navigation.getParam('recipeId', 'ID'));
        const getRecipeIdNum = parseInt(getRecipeId);
        try {
            const response = await fetch(`https://desqol.hihva.nl/recipe/${getRecipeIdNum}/comments`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'X-API-KEY': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: this.state.input,
                    rating: this.state.rating
                })
            });
            responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        } catch (error) {
            console.error(error);
            return;
        }
    };

    render(): JSX.Element {
        return (
            <SafeAreaView style={styles.commentList}>
                <NavHeader
                    navIcon
                    onClick={() => this.props.navigation.goBack(null)}
                    title='Comments'
                />
                <FlatList
                    data={this.state.comments}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={
                        <View>
                            <RateBar onFinishRating={(rating) => this.updateRating(rating)} />
                            <View style={styles.newComment}>
                                <ProfileAvatar
                                    avatarStyle={styles.avatar}
                                    image='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                                    initials='AB'
                                />
                                <View>
                                    <PrimaryTextField
                                        onChangeText={input => this.updateInput(input)}
                                        textFieldStyle={styles.input}
                                        value={this.state.input}
                                    />
                                </View>
                                <PrimaryButton
                                    componentStyle={styles.primaryButton}
                                    onClick={() => this.handleCommentSubmit().then((response) => {
                                        const newComment = response;
                                        const stateComments = this.state.comments;
                                        const newCommentList = [...stateComments];
                                        newCommentList.push(newComment);
                                        this.setState({
                                            comments: newCommentList
                                        });

                                        this.setState({
                                            input: '',
                                        });
                                    })}
                                    title="Enter"
                                    type="solid"
                                />
                            </View>
                        </View>
                    }
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.title}>
Comments
                            </Text>
                        </View>
                    }
                    removeClippedSubviews={false}
                    renderItem={({ item }: { item: any }) => (
                        <View>
                            <ListItem
                                leftAvatar={
                                    <ProfileAvatar
                                        image='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                                        initials='AB'
                                    />
                                }
                                subtitle={
                                    <View style={styles.rating}>
                                        <Rating
                                            imageSize={20}
                                            readonly
                                            startingValue={item.rating}
                                        />
                                    </View>
                                }
                                title={item.comment}
                            />
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}
