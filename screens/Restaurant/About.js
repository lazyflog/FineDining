import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../Utility/style";
import { AntDesign } from '@expo/vector-icons';

const rest = {
    name: "롤링 파스타",
    price: "5000 ~ 15000원",
    location: "경기도 부천시",
    about:
        "항상 최선을 다하겠습니다."
};

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{rest.name}</Text>

            <Text style={styles.info}>
                {rest.price} &#8226; {rest.location}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>정보{"\n\n"}{rest.name}</Text>
            <Text style={gs.sectionTitle}><AntDesign name="phone" size={18} color="white" /> +82-1234-5678{"\n"}</Text>
            <Text style={styles.about}>{rest.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
});
