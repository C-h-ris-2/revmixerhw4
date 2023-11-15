import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView, RefreshControl, } from 'react-native';
import { DataTable } from "react-native-paper";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  PageSubtitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  StyledButton,
  ButtonText,
  StyledButton2,
  ButtonText2,
} from './../styling/styles';


export default function MainPage({navigation}) {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [refreshing, setRefreshing] = useState(false); // New state for refreshing

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
    } finally {
      setRefreshing(false); // Set refreshing to false after the query is complete
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
  }, [refreshing]);

  const handleAdd = () => {
    navigation.navigate("AddSong");
  } 

  const toView = (id, artist,song, rating) => {
    AsyncStorage.setItem("id", id.toString());
    AsyncStorage.setItem("artist", artist);
    AsyncStorage.setItem("song", song);
    AsyncStorage.setItem("rating", rating.toString());
    const ff = id.toString();
    Alert.alert(ff);
    navigation.navigate("View");
  } 

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true before making the query
    // The useEffect hook will be triggered due to the change in the refreshing state
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
    }>
    <View style={styles.container}>
      <PageTitle>RevMixer</PageTitle>
      <PageSubtitle>You are logged in as: {username}</PageSubtitle>
      <StyledButton onPress={() => handleAdd()}>
            <ButtonText>Add a new song!</ButtonText>
            </StyledButton>
    
        {posts.map((r, i) => (
            <StyledButton2 onPress={() => toView(r.id,r.artist,r.song,r.rating)}>
              <ButtonText2>
                {r.id} | {r.artist} | {r.song} | {r.rating} | 
                </ButtonText2>
                </StyledButton2>
        ))}
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
