import React, { FC, ReactElement, useRef,useState,useEffect} from "react";
//import { Alert, Button, StyleSheet, TextInput, Text , View} from "react-native";
// import { useNavigate } from "react-router-dom";
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

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[errMsg, setErrMsg] = useState('');


  
  const errRef = useRef();
  useEffect(() => {
    setErrMsg('');
}, [username,password])
  const handleLogin = () => {
    axios
      .post('http://172.21.76.243:8080/comp333-hw3-frontend/index.php/user/login', {username, password})
      .then((response) => {
        if (response.data.code === 0){
          console.log(response.data);
          AsyncStorage.setItem("username", username);
          navigation.navigate('MainPage');
          //clear input fields

      } else {
          setErrMsg("Username or password is incorrect");
          console.log(response.data.code);
          navigation.navigate('MainPage');
      }
        // localStorage.setItem("username", username)
      })
      .catch((error) =>{
        console.error("Login failure: ", error);
        navigation.navigate('Update');
      });

  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/RevMixer_logo_RA.png')}></PageLogo>
          <PageTitle>Welcome to RevMixer</PageTitle>
          <PageSubtitle>Sign Into Your Account</PageSubtitle>
          <StyledFormArea>
          <StyledTextInput
            // style={StyledInputLabel}
            value={username}
            placeholder={"Username"}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize={"none"}
          />
        <StyledTextInput
          // style={StyledInputLabel}
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