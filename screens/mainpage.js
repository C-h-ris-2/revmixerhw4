import React, { useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView, RefreshControl, } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Star, Staro} from 'react-native-vector-icons/AntDesign';

import {
  PageTitle,
  PageSubtitle,
  StyledButton,
  ButtonText,
  StyledButton2,
  ButtonText2,
  StyledFormArea,
  StyledTextInput
} from './../styling/styles';

function Stars(props){
  const starNum = props;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
      if (i <= starNum) {
        stars.push(<Star key={i} color="gold"/>); // Filled star icon
      } else {
        stars.push(<Staro key={i} color="gold"/>); // Empty star icon
      }
  }
  return <span>
      {stars}
  </span>
}

export default function MainPage({navigation}) {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [refreshing, setRefreshing] = useState(false); // New state for refreshing
  const [search, setSearch] = useState('');

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

  const toView = ( id, username1, artist,song, rating) => {
    AsyncStorage.setItem("id", id.toString());
    AsyncStorage.setItem("artist", artist);
    AsyncStorage.setItem("song", song);
    AsyncStorage.setItem("username1", username1);
    AsyncStorage.setItem("rating", rating.toString());
    navigation.navigate("View");
  } 

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true before making the query
    // The useEffect hook will be triggered due to the change in the refreshing state
  }

  const Logout = () => {
    navigation.navigate("Login");
  }
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
    }>
    <View style={styles.container}>
    <StyledButton onPress={() => Logout()}>
    <ButtonText>Log out</ButtonText>
    </StyledButton>
      <PageTitle>RevMixer</PageTitle>
      <Text>Search by song!</Text>
      <StyledTextInput
          type='text'
          placeholder="Search..."
          className="search"
          onChangeText={(text) => setSearch(text)} // Use onChangeText instead of onChange
        />       
      <PageSubtitle>You are logged in as: {username}</PageSubtitle>
      <StyledButton onPress={() => handleAdd()}>
            <ButtonText>Add a new song!</ButtonText>
            </StyledButton>
    
        {posts.filter((r) =>
        r.song.toLowerCase().includes(search.toLowerCase())).map((r) => (
            <StyledButton2 onPress={() => toView(r.id, r.username, r.artist,r.song,r.rating)}>
              <ButtonText2>
                {r.id} | {r.username} | {r.artist} | {r.song} | {r.rating} 
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
