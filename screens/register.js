import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import axios from 'axios';

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

export default function Register(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");



  const handleRegister = () => {
    axios
      .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/create', {username, password})
      .then((response) => {
        console.log(response.data.msg);
        // localStorage.setItem("username", username)
      })
      .catch((error) =>{
        console.error("registration failure: ", error);
      });

  };

  const signUp = () => {
    console.log("you have created an account!");
    navigation.navigate('Login');
  }

  const toLogin = () => {
    console.loh("you have created an account!");
    navigation.navigate('Login');
  }


  return (
  <StyledContainer>
    <InnerContainer>
      <PageLogo resizeMode="cover" source={require('./../assets/RM_MusicLovingWoman.png')}></PageLogo>
      <PageTitle>Create an Account</PageTitle>
      <StyledFormArea>
      <StyledTextInput
        style={StyledInputLabel}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
    <StyledTextInput
      style={StyledInputLabel}
      value={password}
      placeholder={"Password"}
      secureTextEntry
      onChangeText={(text) => setPassword(text)}
    />
    <StyledTextInput
      style={StyledInputLabel}
      value={password2}
      placeholder={"Confirm Password"}
      secureTextEntry
      onChangeText={(text) => setPassword2(text)}
    />
   <StyledButton onPress={() => signUp()}>
        <ButtonText>Sign Up!</ButtonText>
        </StyledButton>
        <StyledButton onPress={() => toLogin()}>
        <ButtonText>Already have an account? Sign In!</ButtonText>
        </StyledButton>
  </StyledFormArea>
    </InnerContainer>
  </StyledContainer>
// <View>
// <Text>Hi</Text>
// </View>
  );
};