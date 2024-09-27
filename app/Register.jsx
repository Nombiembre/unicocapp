import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AuthLayout from "../src/layouts/AuthLayout";
import Input from "../src/components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { UserModel } from "../src/model/UserModel";
import CustomText from "../src/components/common/CustomText";
import { LinearGradient } from "expo-linear-gradient";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = () => {
    UserModel.register(username, password);
  };

  return (
    <AuthLayout>
      <View style={{ gap: 10 }}>
        <Input
          placeholder="Correo"
          bgColor="#fff"
          onChangeText={(text) => {
            setUsername(text);
          }}>
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          bgColor="#fff"
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>

      <LinearGradient
        className="rounded-full mt-auto"
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={["#ffc9c9", "#fd1d1d"]}
        // colors={["#333", "#151515"]}
      >
        <TouchableOpacity style={styles.buttonContainer} onPress={handleCreateUser}>
          <CustomText style={{ color: "#fff", fontSize: 16 }}>Registrarse</CustomText>
        </TouchableOpacity>
      </LinearGradient>
    </AuthLayout>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
    // backgroundColor: "#1D3466",
  },
});
