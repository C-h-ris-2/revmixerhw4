import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/login';
import Register from './screens/register';
import MainPage from './screens/mainpage';
import AddSong from './screens/addsong';
import Update from './screens/update';
import View from './screens/view';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component={Login} options = {{title: 'Login'}} />
                <Stack.Screen name = "Register" component={Register} options = {{title:' Register', color: 'darkgreen'}} />
                <Stack.Screen name = "MainPage" component={MainPage} options = {{title:'Mainpage', cardstyle: {backgroundColor: '#ADF4CC'}}} />
                <Stack.Screen name = "AddSong" component={AddSong} options = {{title:'Add Song', cardstyle: {backgroundColor: '#ADF4CC'}}} />
                <Stack.Screen name = "Update" component={Update} options = {{title:'Update Song', cardstyle: {backgroundColor: '#ADF4CC'}}} />
                <Stack.Screen name = "View" component={View} options = {{title: 'View', cardstyle: {backgroundColor: '#ADF4CC'}}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 


export default App;