import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/login';
import Register from './screens/Register';
import MainPage from './screens/mainpage';
import AddSong from './screens/addsong';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component={Login} options = {{title: 'Login'}} />
                <Stack.Screen name = "Register" component={Register} options = {{title:' Register', color: 'darkgreen'}} />
                <Stack.Screen name = "MainPage" component={MainPage} options = {{title:'Mainpage', cardstyle: {backgroundColor: '#ADF4CC'}}} />
                <Stack.Screen name = "AddSong" component={AddSong} options = {{title:'Mainpage', cardstyle: {backgroundColor: '#ADF4CC'}}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 


export default App;