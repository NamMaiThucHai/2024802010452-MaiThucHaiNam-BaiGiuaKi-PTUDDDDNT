import { createStackNavigator } from "@react-navigation/stack";
import Login from "../compoment/Login";
import Register from "../compoment/Register";
import Home from "../compoment/Home";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { StyleSheet } from "react-native";
import { useState } from "react";

const Stack = createStackNavigator()
const MyStack =()=>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export default MyStack;
