import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login"
import Home from "./screens/Home"
import Cart from "./screens/Cart"

const MainNavigator = createStackNavigator();

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          // initialRouteName=""
          >
            <MainNavigator.Screen 
            name="Login" 
            component={Login}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: "#5CDB95",
              }
            }}
            />
            <MainNavigator.Screen 
            name="Home" 
            component={Home}
            options={{
              title: "",
            }} 
            />
            <MainNavigator.Screen 
            name="Cart" 
            component={Cart}
            options={{
              title: "",
            }} 
            />

        </MainNavigator.Navigator>
      </NavigationContainer>
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
