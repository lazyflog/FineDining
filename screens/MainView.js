import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function MainView(){
        return(
            <View style={styles.container1}>
                <Text style={{fontSize: 30, color: 'white'}}>MainView</Text>
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