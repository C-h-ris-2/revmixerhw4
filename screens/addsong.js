import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Rating, AirbnbRating } from 'react-native-ratings';

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
  ButtonText
} from './../styling/styles';
// import addsong from './App.js';

export default function AddSong({navigation}) {
  const [username, setUsername] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const[rating, setRating] = useState('');

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
  }, []);

  const handleAdd = () => {
    axios
    .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/songinsert', {username, artist, song, rating})
    .then((response) => {
      console.log(response.data.msg);
      navigation.navigate("MainPage");
    })
    .catch((error) => {
      console.error("Error adding new song: ", error);
    });
  };

  const toCancel = () => {
    navigation.navigate('MainPage');
  }

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Add A New Song!</PageTitle>
        <StyledFormArea>
        <StyledTextInput
            value={artist}
            placeholder={"Artist"}
            onChangeText={(text) => setArtist(text)}
            autoCapitalize={"none"}
          />
        <StyledTextInput
          value={song}
          placeholder={"Song"}
          secureTextEntry
          onChangeText={(text) => setSong(text)}
        />
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        <StyledButton type="submit" onClick={() => {handleAdd()}}>
            <ButtonText>
              Submit
            </ButtonText>
          </StyledButton>
          <StyledButton type="submit" onClick={() => navigation.navigate('MainPage')}>
            <ButtonText>
              Cancel
            </ButtonText>
          </StyledButton>
          </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
}
