import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Flatlist} from 'react-native';
import {DataTable } from "react-native-paper";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import mainpage from './App.js';

export default function MainPage() {

  const query = async () => {
    let response = await axios.get("http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/songlist", {});
    if (response.data.code === 0) {
        setPosts(response.data.data);
    } else {
        console.error('Error fetching data');
        alert(response.data.msg); 
    }
}


const [posts, setPosts] = useState([]);


useEffect(() => {
  query();
})

  return (

    <View style={styles.container}>
            {/* <Text title="username">Logged in as: {AsyncStorage.getItem("username")}</Text> */}

      {/* <Text>mainpage</Text>
      <StatusBar style="auto" /> */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title>Artist</DataTable.Title>
          <DataTable.Title>Song</DataTable.Title>
          <DataTable.Title>Rating</DataTable.Title>
        </DataTable.Header>
        {posts.map((r,i) => (
          <DataTable.Row>
            <DataTable.Cell>{r.id}</DataTable.Cell>
            <DataTable.Cell>{r.username}</DataTable.Cell>
            <DataTable.Cell>{r.artist}</DataTable.Cell>
            <DataTable.Cell>{r.song}</DataTable.Cell>
            <DataTable.Cell>{r.rating}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
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