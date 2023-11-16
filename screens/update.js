import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import addsong from './App.js';

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

export default function Update({navigation}) {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const[rating, setRating] = useState('');
  const[id, setId] = useState('');


  useEffect(() => {
    const fetchID = async () => {
      try {
        const storedID = await AsyncStorage.getItem("id");
        if (storedID) {
          setId(storedID);
        }
      } catch (error) {
        console.error('Error fetching id', error);
      }
    };

    fetchID();
  }, []);

  // useEffect(() => {
  //   const fetchUsername = async () => {
  //     try {
  //       const storedUsername = await AsyncStorage.getItem("username");
  //       if (storedUsername) {
  //         setUsername(storedUsername);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching username', error);
  //     }
  //   };

  //   fetchUsername();
  // }, []);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const storedArtist = await AsyncStorage.getItem("artist");
        if (storedArtist) {
          setArtist(storedArtist);
        }
      } catch (error) {
        console.error('Error fetching username', error);
      }
    };

    fetchArtist();
  }, []);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const storedSong = await AsyncStorage.getItem("song");
        if (storedSong) {
          setSong(storedSong);
        }
      } catch (error) {
        console.error('Error fetching username', error);
      }
    };

    fetchSong();
  }, []);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const storedRating = await AsyncStorage.getItem("rating");
        if (storedRating) {
          setUsername(storedRating);
        }
      } catch (error) {
        console.error('Error fetching username', error);
      }
    };

    fetchRating();
  }, []);

  const handleAdd = () => {
    axios
        .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/updatesong', {id,artist,song,rating})
        .then((response) => {
          console.log(id);
          console.log(response.data.msg);
          navigation.navigate("MainPage");
          // You can redirect to a login page or display a success message here
        })
        .catch((error) => {
          console.error('Registration error:', error);
          // Handle the registration error here
        });
  };


  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Update Song</PageTitle>
        <StyledFormArea>
        <StyledTextInput
            value={artist}
            placeholder={artist}
            onChangeText={(text) => setArtist(text)}
            autoCapitalize={"none"}
          />
        <StyledTextInput
          value={song}
          placeholder={song}
          onChangeText={(text) => setSong(text)}
        />
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        <StyledButton type="submit" onPress={() => {handleAdd()}}>
            <ButtonText>
              Submit
            </ButtonText>
          </StyledButton>
          <StyledButton type="submit" onPress={() => navigation.navigate('MainPage')}>
            <ButtonText>
              Cancel
            </ButtonText>
          </StyledButton>
          </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
}
