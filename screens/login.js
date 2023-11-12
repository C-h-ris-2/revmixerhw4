import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// import {NativeRouter, Route, Link} from "react-router-native";
// import login from './App.js';

export default function Login({ navigation}) {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <StatusBar style="auto" />
      <Button 
      title="Register" onPress={() => navigation.navigate("Register")}
      />
      <Button title="AddSong" onPress={() => navigation.navigate("AddSong")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});