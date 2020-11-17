import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../Utility/style";

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>편의시설</Text>

            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Feather name="wifi" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>와이파이</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Entypo name="drink" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>술</Text>
                </View>

                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>주차장</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    amenitiesContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: "wrap"
    },
    amenityContainer: {
        alignItems: "center",
        width: 95,
        marginVertical: 12
    },
    amenity: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        ...gs.center,
        backgroundColor: "#444"
    },
    amenityName: {
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: "center"
    }
});
