import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { DataTable } from "react-native-paper";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');

  const query = async () => {
    try {
      let response = await axios.get("http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/songlist", {});
      if (response.data.code === 0) {
        setPosts(response.data.data);
      } else {
        console.error('Error fetching data');
        alert(response.data.msg);
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Error fetching username', error);
      }
    };

    fetchUsername();
    query();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>You are logged in as: {username}</Text>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title>Artist</DataTable.Title>
          <DataTable.Title>Song</DataTable.Title>
          <DataTable.Title>Rating</DataTable.Title>
        </DataTable.Header>
        {posts.map((r, i) => (
          <DataTable.Row key={i}>
            <DataTable.Cell>{r.id}</DataTable.Cell>
            <DataTable.Cell>{r.username}</DataTable.Cell>
            <DataTable.Cell>{r.artist}</DataTable.Cell>
            <DataTable.Cell>{r.song}</DataTable.Cell>
            <DataTable.Cell>{r.rating}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
    </ScrollView>
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
