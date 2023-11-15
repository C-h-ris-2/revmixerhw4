import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { DataTable } from "react-native-paper";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  PageSubtitle,
  PageSubtitle2,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  StyledButton,
  ButtonText
} from './../styling/styles';

export default function View({navigation}) {
  const [id, setID] = useState('');
  const [username, setUsername] = useState('');
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const[rating, setRating] = useState('');

  useEffect(() => {
    const fetchID = async () => {
      try {
        const storedID = await AsyncStorage.getItem("id");
        if (storedID) {
          setID(storedID);
        }
      } catch (error) {
        console.error('Error fetching id', error);
      }
    };

    fetchID();
  }, []);

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

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const storedArtist = await AsyncStorage.getItem("artist");
        if (storedArtist) {
          setArtist(storedArtist);
        }
      } catch (error) {
        console.error('Error fetching artist', error);
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
        console.error('Error fetching song', error);
      }
    };

    fetchSong();
  }, []);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const storedRating = await AsyncStorage.getItem("rating");
        if (storedRating) {
          setRating(storedRating);
        }
      } catch (error) {
        console.error('Error fetching rating', error);
      }
    };

    fetchRating();
  }, []);

  const toUpdate = () => {
    navigation.navigate("Update");
  }

  const Delete = () => {
    Alert.alert("poopoo");
  }

  const Cancel = () => {
    navigation.navigate("MainPage");
  }


  return (
    <StyledContainer>
        <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/RevMixer_logo_RA.png')}></PageLogo>
          <PageTitle>Song view</PageTitle>
          <PageSubtitle>You are logged in as: {username}</PageSubtitle>
          <PageSubtitle2>ID: {id}</PageSubtitle2>
          <PageSubtitle2>Artist: {artist}</PageSubtitle2>
          <PageSubtitle2>Song: {song}</PageSubtitle2>
          <StyledFormArea>
          <StyledButton type="submit" onClick={() => toUpdate()}>
            <ButtonText>
              Update Rating
            </ButtonText>
          </StyledButton>
          <StyledButton type="submit" onClick={() => Delete()}>
            <ButtonText>
              Delete Rating
            </ButtonText>
          </StyledButton>
          <StyledButton type="submit" onClick={() => {Cancel()}}>
            <ButtonText>
              Go Back
            </ButtonText>
          </StyledButton>
          </StyledFormArea>
        </InnerContainer>
    </StyledContainer>
  )

}