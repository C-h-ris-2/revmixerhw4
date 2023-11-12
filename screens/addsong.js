import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import addsong from './App.js';

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
    <View style={styles.container}>
      {/* <Text>Add a song here mother fucker</Text>
      <StatusBar style="auto" /> */}
      <TextInput value={artist} placeholder={"Username"} onChangeText={(text) => setArtist(text)} autoCapitalize={"none"}/>
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