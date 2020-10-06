import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function RegistView(){
        return(
            <View style={styles.container1}>
                <Text style={{fontSize: 30, color: 'white'}}>RegisterView</Text>
            </View>
            );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04B4AE'
    }
})