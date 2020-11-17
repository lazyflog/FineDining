import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const photos = [
    require("../assets/1.jpg"),
    require("../assets/burger.jpg"),
    require("../assets/ramen.jpg"),
    require("../assets/1.jpg"),
];

export default function PostPhoto(){
    return(
        <View style={styles.SectionContainer, {marginTop: 8}}>
            <Text style={styles.SectionTitle}>My Posts</Text>
            <View style={styles.PhotosContainer}>
                {photos.map((Photo, index) => {
                    return(
                        <Image
                            source={Photo}
                            key={index}
                            style={[
                                styles.Photo,
                                {
                                    marginRight: (index + 1) % 3 === 0 ? 0 : 12,
                                }
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    SectionContainer:{
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: "gray"
    },
    SectionTitle: {
        fontWeight: "700",
        color: "black",
        fontSize: 32
    },
    PhotosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    },
    Photo: {
        width: 108,
        height: 108,
        marginBottom: 12,
        borderRadius: 8
    }
})