import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
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

export default function AddSong() {

  

  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const[rating, setRating] = useState('');

  const handleAdd = () => {
    axios
    .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/songinsert', {username, artist, song, rating})
    .then((response) => {
      console.log(response.data.msg);
    })
    .catch((error) => {
      console.error("Error adding new song: ", error);
    });
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Add A New Song!</PageTitle>
        <StyledTextInput
            style={StyledInputLabel}
            value={artist}
            placeholder={"Artist"}
            onChangeText={(text) => setArtist(text)}
            autoCapitalize={"none"}
          />
        <StyledTextInput
          style={StyledInputLabel}
          value={song}
          placeholder={"Song"}
          secureTextEntry
          onChangeText={(text) => setSong(text)}
        />
        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
      </InnerContainer>
    </StyledContainer>
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