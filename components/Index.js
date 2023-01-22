import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';


export default class Index extends Component {
constructor(){
  super()
  this.state = {}
}



  render(){ 
    return(
      <View style={styles.container}>
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/pakopia.png')} />
        <Text style={styles.logoName}>PAKOPIA</Text>
        </View>

        <TouchableOpacity style={styles.button} 
            onPress={() => this.props.navigation.navigate("InputNotes")}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 60,
    width: 60,
    
  },
  logoName: {
    fontSize: 20
  },
  button: {
    
  }

})