import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileView(){
        return(
            <View style={styles.container1}>
                <Text style={{fontSize: 30, color: 'white'}}>ProfileView</Text>
            </View>
            );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81F7D8'
    }
})