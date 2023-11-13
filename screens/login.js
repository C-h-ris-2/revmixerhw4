import React, { FC, ReactElement, useState } from "react";
//import { Alert, Button, StyleSheet, TextInput, Text , View} from "react-native";
// import { useNavigate } from "react-router-dom";
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

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    axios
      .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/create', {username, password})
      .then((response) => {
        console.log(response.data.msg);
        // localStorage.setItem("username", username)
      })
      .catch((error) =>{
        console.error("Login failure: ", error);
      });

  };

  const handleRegister = () => {
    console.log("register")
  };

  return (
    <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/RevMixer_logo_RA.png')}></PageLogo>
          <PageTitle>Welcome to RevMixer</PageTitle>
          <PageSubtitle>Sign Into Your Account</PageSubtitle>
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
       <StyledButton onPress={() => handleLogin()}>
            <ButtonText>Log in!</ButtonText>
            </StyledButton>
            <StyledButton onPress={() => handleRegister()}>
            <ButtonText>Don't have an account? Sign up!</ButtonText>
            </StyledButton>
      </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    // <View>
    // <Text>Hi</Text>
    // </View>
  );
};