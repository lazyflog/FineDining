import React, { useState } from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { dbService } from "../Utility/config";
import { v4 as uuidv4 } from 'uuid';
import * as ImagePicker from "expo-image-picker";

export default CreateFeed = () => {
    const [feed, setFeed] = useState("");
    const [feedPhoto, setFeedPhoto] = useState();

    const pushData = async () => {
        setLoading(true);

        try {
            await firebase.uploadFeedPhoto(email, password);

            const uid = firebase.getCurrentUser().uid;

            const userInfo = await firebase.getUserInfo(uid);

            setUser({
                username: userInfo.username,
                email: userInfo.email,
                uid,
                profilePhotoUrl: userInfo.profilePhotoUrl,
                isLoggedIn: true,
            });
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });

            if (!result.cancelled) {
                setFeedPhoto(result.uri);
            }
        } catch (error) {
            console.log("Error @pickImage: ", error);
        }
    };
    const addFeedPhoto = async () => {
        const status = await getPermission();

        if (status !== "granted") {
            alert("사진을 선택하기 위해서는 카메라 권한이 필요합니다.");

            return;
        }

        pickImage();
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("feeds").add({
            feed,
            createdAt: Date.now(),
        });
        setFeed("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setFeed(value);
    };

    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}>새 게시글</Text>
            <View style={styles.con}>
                <TouchableOpacity style={styles.photoContainer}>
                    <Text style={styles.photoText}>+</Text>
                </TouchableOpacity>
                <View style={styles.aboutContainer}>
                    <TextInput style={styles.aboutText} placeholder="문구 입력"></TextInput>
                </View>
            </View>
            <View style={styles.con2}>
                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="가게 이름 입력하기"></TextInput>
                </View>
            </View>
            <View style={styles.con2}>
                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="메뉴 이름 입력하기"></TextInput>
                </View>
            </View>
            <View style={styles.con2}>
                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="가게 위치 입력하기"></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={pushData}>
                <Text style={styles.buttonText}>글쓰기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ebecf3"
    },
    header: {
        fontSize: 19,
        fontWeight: "bold",
    },
    photoContainer: {
        marginTop: 7,
        marginLeft: 10,
        width: 85,
        height: 85,
        borderRadius: 7,
        backgroundColor: "white"
    },
    photoText: {
        marginStart: 29,
        marginTop: 13,
        fontSize: 40,
        color: "gray"
    },
    aboutContainer: {
        width: 305,
        height: 85,
        borderRadius: 8,
        backgroundColor: "white",
        marginTop: -85,
        marginLeft: 102
    },
    aboutText: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15
    },
    con: {
        width: 415,
        height: 100,
        backgroundColor: "gray",
        marginTop: 20
    },
    con2: {
        width: 415,
        height: 50,
        backgroundColor: "gray",
        marginTop: 3
    },
    textContainer: {
        width: 405,
        height: 40,
        backgroundColor: "white",
        borderRadius: 8,
        marginStart: 5,
        marginTop: 5
    },
    text: {
        marginStart: 10,
        marginTop: 10,
        fontSize: 15
    },
    button: {
        width: 80,
        height: 40,
        backgroundColor: "skyblue",
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    }
})