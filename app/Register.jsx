import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AuthLayout from "../src/layouts/AuthLayout";
import Input from "../src/components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { UserModel } from "../src/model/UserModel";
import CustomText from "../src/components/common/CustomText";
import { LinearGradient } from "expo-linear-gradient";
import {
  $userCarrera,
  $userCedula,
  $userDisplayName,
  $userRol,
  $userSangre,
} from "../src/context/userToken";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [cedula, setCedula] = useState("");
  const [carrera, setCarrera] = useState("");
  const [sangre, setSangre] = useState("");
  const [rol, setRol] = useState("");

  const handleCreateUser = () => {
    UserModel.register(username, password, displayName);
    $userCedula.set(cedula);
    $userCarrera.set(carrera);
    $userSangre.set(sangre);
    $userRol.set(rol);
    console.log("Cedula:", cedula);
    console.log("Carrera:", carrera);
    console.log("Rol:", rol);
    console.log("Sangre:", sangre);
    console.log("DisplayName:", displayName);
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
        <Input
          bgColor="#fff"
          placeholder="Nombre y apellidos"
          onChangeText={(text) => setDisplayName(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
        <Input bgColor="#fff" placeholder="Cedula" onChangeText={(text) => setCedula(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
        <Input bgColor="#fff" placeholder="Tipo de sangre" onChangeText={(text) => setSangre(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
        <Input bgColor="#fff" placeholder="Carrera" onChangeText={(text) => setCarrera(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
        <Input
          bgColor="#fff"
          placeholder="Estudiante o profesor"
          onChangeText={(text) => setRol(text)}>
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
