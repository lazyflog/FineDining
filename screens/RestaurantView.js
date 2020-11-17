import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { colors } from "../Utility/style";
import Header from "./Restaurant/Header";
import About from "./Restaurant/About";
import Stats from "./Restaurant/Stats";
import Amenities from "./Restaurant/Amenities";

export default RestaurantView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
							navigation.goBack();
						}}
						/>
            <StatusBar barStyle="light-content" />

            <Header />

            <View>
                <About />
                <Stats />
                <Amenities />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
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
