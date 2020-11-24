import React from "react";
import styled from "styled-components";
import { SafeAreaView, StatusBar, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from "../Utility/Text";
import FeedData from "../FeedData";
import { TouchableOpacity } from "react-native-gesture-handler";


export default MainView = ({ navigation }) => {
    const stars = {
    }

    const renderPost = ({ item }) => (
        <PostContainer>
            <PostHeaderContainer>
                <PostInfoContainer>
                    <PostProfilePhoto source={item.user.profilePhotoUrl} />
                    <Text small heavy>&nbsp;&nbsp;{item.user.username}</Text>
                    <Post>
                        <FeedPhoto source={item.Review.photoUrl} />
                    </Post>
                    <Text large>{item.Review.RestName}</Text>
                    <Text medium>{item.Review.MenuName}</Text>
                </PostInfoContainer>
            </PostHeaderContainer>
            
        </PostContainer>
    );
    return (
        <Container>
            <View>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text dark style={styles.title}>
                            오늘의 추천
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Feed")
                        }}>
                            <Text style={styles.writeButtonText}>
                                글쓰기
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Feed data={FeedData} renderItem={renderPost} keyExtractor={(item) => item.id.toString()} style={styles.feedContainer} />
                </View>
            </View>
        </Container>
    );
};              

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    writeButtonText: {
        fontSize: 18,
        fontWeight: '600',
        padding: 20,
        textAlignVertical: "center",
    },
    feedContainer: {
        marginBottom: 30,
    },
})

const CreateFeed = styled.TouchableOpacity`
    background-color: white;
    width: 65px;
    height: 65px;
    border-radius: 50px;
`;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ebecf3;
    padding-bottom: 80px;
`;

const PostContainer = styled.View`
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 8px;
`;

const Post = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const PostHeaderContainer = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
`;

const FeedPhoto = styled.Image`
    width: 100%;
    height: 150px;
    border-radius: 6px; 
`;

const PostProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

const PostInfoContainer = styled.View`
    flex: 1;
    margin: 0 16px;
`;

const Feed = styled.FlatList``;

/*
const StarContainer = styled.View`
 ${() => {
        if(Review.stars == 1){
            return (
                <Ionicons name="ios-star" size={24} color="black" />
            <Ionicons name="ios-star-outline" size={24} color="black" />
            <Ionicons name="ios-star-outline" size={24} color="black" />
            <Ionicons name="ios-star-outline" size={24} color="black" />
            );
        }
    }}
`;*/