import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";


export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: 20,
          marginBottom: 20,
          width: 120,
          height: 120,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "grey", marginBottom:20, }}>TECHNOKING</Text>
      <View style={{width: '70%'}}>
        <TextInput
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginBottom:10,
          }}
          placeholder="Username"
        />
      </View> 
      <View style={{ marginTop: 10, width: '70%'}}>
        <TextInput
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginBottom: 10,
          }}
          placeholder="E-mail"
        />
      </View> 
      <View style={{ marginTop: 10, width: '70%'}}>
        <TextInput
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginBottom: 20,
          }}
          placeholder="Password"
        />
      </View> 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 60,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 18,
          flexDirection: "row",
          backgroundColor: "#5CDB95",
        }}
      >
        <Text style={{ color: "black", fontSize: "12", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
