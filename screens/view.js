import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, RefreshControl } from 'react-native';
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
  ButtonText
} from './../styling/styles';

export default function View({navigation}) {
    const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const[rating, setRating] = useState('');
  const[username, setUsername] = useState('');


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

  const handleUpdate = () => {
    navigation.navigate("Update");
  }

  return (
    <StyledContainer>
        <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/RevMixer_logo_RA.png')}></PageLogo>
          <PageTitle>Song view</PageTitle>
          <Text>You are logged in as: {username}</Text>
            
        </InnerContainer>
    </StyledContainer>
  )

}