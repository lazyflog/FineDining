import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


export default function MainView(){
        return(
            <View style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>오늘의 추천</Text>
                <ScrollView horizontal={true} 
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true} 
                scrollIndicatorInsets={{top:10, left:10, bottom:10, right:10}}// ios only
                >
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                </ScrollView>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>금주의 FineDining</Text>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
                <Image
                    style={{height: 300, width: 300, resizeMode: 'contain', borderRadius: 80}}
                    source={require('../assets/1.jpg')}/>
            </View>
            </ScrollView>
            </View>
            );
}

const styles = StyleSheet.create({
    container1: {
        marginTop: 50,
        marginStart: 10,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#04B4AE'
    },
    background: {
        backgroundColor: '#04B4AE',
        flex: 1
    }
})