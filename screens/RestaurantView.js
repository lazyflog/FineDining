import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import Header from "./Restaurant/Header";
import About from "./Restaurant/About";
import Stats from "./Restaurant/Stats";
import Amenities from "./Restaurant/Amenities";

export default RestaurantView = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="light-content" />

            <Header />

            <View>
                <About />
                <Stats />
                <Amenities />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
    button: {
		marginTop: 32,
		backgroundColor: '#23A6D9',
		paddingVertical: 12,
		width: 250,
		borderRadius: 12,
		alignItems: "center"
	}
});
