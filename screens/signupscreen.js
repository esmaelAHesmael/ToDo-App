import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Sign Up</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginTop: 20, padding: 10 }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 15,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Todo")}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
