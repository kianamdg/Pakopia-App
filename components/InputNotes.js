import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';


export default class InputNotes extends Component {
constructor(){
    super()
    }



  render(){ 
    return(
      <View style={styles.container}>
        <TextInput style={styles.titleNote} placeholder="Title" placeholderTextColor="#aaadaa"/>
        <TextInput style={styles.dateNote} placeholder="Date" placeholderTextColor="#aaadaa"/>
        <TextInput style={styles.longInputs} multiline placeholder="Notes" placeholderTextColor="#aaadaa" />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>A</Text>
            <Text style={styles.buttonText}>B</Text>
            <Text style={styles.buttonText}>C</Text>
            <Text style={styles.buttonText}>D</Text>
            <Text style={styles.buttonText}>E</Text>
            <Text style={styles.buttonText}>F</Text>
            <Text style={styles.buttonText}>G</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    width: '90%',
    borderRadius: 15
  },
  titleNote: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10
  },
  dateNote: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    fontSize: 10

  },
  longInputs: {
    height: '80%',
    width: '90%',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    paddingTop: 15
  },
   button: {
    marginBottom: 10,
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    width: '16%'
  },
})