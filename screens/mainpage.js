import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import login from './screens/login';
import register from './screens/register';
import mainpage from './screens/mainpage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "login" component={login} options = {{title: 'Login'}} />
                <Stack.Screen name = "register" component={register} options = {{title:' Register', color: 'darkgreen'}} />
                <Stack.Screen name = "mainpage" component={mainpage} options = {{title:'Mainpage', cardstyle: {backgroundColor: '#ADF4CC'}}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 


export default App;