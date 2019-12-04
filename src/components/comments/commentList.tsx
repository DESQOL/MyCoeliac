import React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import { ListItem, Input } from 'react-native-elements';
import ProfileAvatar from '../ui-components/profileAvatar';
import RateBar from '../ui-components/rateBar';
import PrimaryButton from '../ui-components/buttons/PrimaryButton';
import PrimaryTextField from '../ui-components/input/PrimaryTextField';
import { PrimaryGray } from '../../styles/config/colors';

interface CommentListProps {
  comments: any;
  currentProfile: any;
}

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'flex-start',
    },
    input: {
        borderColor: PrimaryGray,
        borderWidth: 1,
        height: 40,
        width: 180,
    },
    newComment: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 20,
    },
    primaryButton: {
        width: 100,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
});

export default function CommentList({
    comments,
    currentProfile,
}: CommentListProps): JSX.Element {
    return (
        <View>
            <FlatList
                data={comments}
                renderItem={({ item }: { item: any }) => (
                    <ListItem
                        title={item.body}
                        leftAvatar={
                            <ProfileAvatar image={item.avatar} initials={item.initials} />
                        }
                    />
                )}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>Comments</Text>
                    </View>
                }
                ListFooterComponent={
                    <View>
                        <RateBar />
                        <View style={styles.newComment}>
                            <ProfileAvatar
                                image={currentProfile.avatar}
                                initials={currentProfile.initials}
                                avatarStyle={styles.avatar}
                            />
                            <PrimaryTextField textFieldStyle={styles.input} />
                            <PrimaryButton
                                title="Enter"
                                type="solid"
                                buttonStyle={styles.primaryButton}
                            />
                        </View>
                    </View>
                }
            />
        </View>
    );
}
