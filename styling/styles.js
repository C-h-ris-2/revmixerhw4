import {View, Text,TextInput, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
export const Colors = {
    primary: "#FFFFFF",
    secondary: "#E5E7EB",
    tertiary:"#1F2937",
    darkLight:"#9CA3AF",
    brand: "#6D28D9",
    bbackground: "#D1B0FF",
    bborder: "#9B55FF"
};
const { primary, secondary, tertiary, brand, bbackground, bborder} = Colors;
// so bar doesn't go over the boundaries
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;
export const InnerContainer = styled.View`
    flex: 1;
    width:100%;
    align-items: center;
`;
export const PageLogo = styled.Image`
    width: 250px;
    height:200px;
`;
export const PageTitle = styled.Text`
    font-size:30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding:10px;
`;

export const PageTitle2 = styled.Text`
    font-size:45px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding:10px;
`;

export const PageSubtitle = styled.Text`
    font-size:18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-align: center;
    font-weight: bold;
    color: ${tertiary};
`;

export const PageSubtitle2 = styled.Text`
    font-size:18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-align: left;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;
export const StyledInputLabel = styled.Text`
    background-color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const StyledButton2 = styled.TouchableOpacity`
    width: 80%;
    background-color: ${bbackground};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    border: 2px solid ${bborder};
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
    
`;

export const ButtonText2 = styled.Text`
    color: "#ffffff";
    font-size: 16px;
    text-align: center;
    
`;

export const StyledText = styled.TouchableOpacity`
    color: ${primary};
    background-color: ${primary};
`;