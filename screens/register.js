import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import axios from 'axios';
export default function Register(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const doUserRegistration = (e) => {
  //   e.preventDefault();

  //   // Make a POST request to your API to register the user
  //   axios
  //     .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/create', {username, password})
  //     .then((response) => {
  //       console.log(response.data.msg);
  //       localStorage.setItem("username",username)
  //       // You can redirect to a login page or display a success message here
  //     })
  //     .catch((error) => {
  //       console.error('Registration error:', error);
  //       // Handle the registration error here
  //     });
  // };


  const handleRegister = () => {
    axios
      .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/create', {username, password})
      .then((response) => {
        console.log(response.data.msg);
        localStorage.setItem("username", username)
      })
      .catch((error) =>{
        console.error("registration failure: ", error);
      });

  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Sign Up"} onPress={() => handleRegister()}>Sign Up!</Button>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});