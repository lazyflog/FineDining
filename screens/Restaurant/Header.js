import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { gs } from "../../Utility/style";

export default function Header(){
        return(
            <View>
                <Image source={require("../../assets/1.jpg")} style={{ width: "100%", height: 400 }} />
            </View>
            );
}

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: "absolute",
        top: 64,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: "#fff"
    }
});

/*<View style={styles.topButtons}>
                    <AntDesign name="close" size={24} color="#fff" />

                    <View style={gs.rowCenter}>
                        <AntDesign name="save" size={24} style={styles.topButtonRight} />
                        <AntDesign name="sharealt" size={24} style={styles.topButtonRight} />
                        <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight} />
                    </View>
                </View> */