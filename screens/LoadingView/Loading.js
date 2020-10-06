import React from "react";
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text } from 'react-native';

export default class Loading extends React.Component {
    render() {
        return(
          <View style={styles.container}>
            <Text style={{fontSize: 40, color: 'white'}}>Fine-Dining</Text>
            <Text style={{fontSize: 15, color: 'white'}}>MayWeatherTeam</Text>
                <LottieView
                  ref={animation => {
                    this.animation = animation;
                  }}
                  source={require('./dish.json')}
                  style={{
                    width: 250,
                    height: 250
                  }} autoPlay/>
          </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#04B4AE'
  }
})