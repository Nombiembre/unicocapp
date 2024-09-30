import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import chip from "../../assets/Chip.png";
import profile from "../../assets/profile.jpeg";
import carnetFondo from "../../assets/fondoCarnet.png";
import { useStore } from "@nanostores/react";
import {
  $userCarrera,
  $userCedula,
  $userRol,
  $userSangre,
  $userToken,
} from "../../context/userToken";

const CarnetCard = () => {
  const user = useStore($userToken);
  console.log(user);
  const displayName = user.displayName;
  const cedula = useStore($userCedula);
  const carrera = useStore($userCarrera);
  const sangre = useStore($userSangre);
  const rol = useStore($userRol);

  const info = {
    nombre: displayName,
    rol: rol,
    identificacion: `CC. ${cedula}`,
    carrera: carrera,
    sangre: sangre,
  };

  const eventosInfo = [
    {
      costo: "Entrada Libre",
      titulo: "Festimaratón de baile",
      fecha: "10/11/2024",
      hora: "12:00 pm",
      lugar: "Ciudad Universitaria",
      organizador: "Direccióon de Bienestar Universitario",
    },
    {
      costo: "Pago",
      titulo: "Curso Básico de Programación",
      fecha: "10/11/2024",
      hora: "12:00 pm",
      lugar: "Ciudad Universitaria",
      organizador: "Direccióon de Bienestar Universitario",
    },
    {
      costo: "Entrada Libre",
      titulo: "Festimaratón de baile",
      fecha: "10/11/2024",
      hora: "12:00 pm",
      lugar: "Ciudad Universitaria",
      organizador: "Direccióon de Bienestar Universitario",
    },
  ];

  return (
    <View className="bg-white border border-slate-200 m-4 rounded-3xl overflow-hidden">
      <Image source={carnetFondo} className="absolute top-0 right-0" />
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between ">
          <Text className="text-3xl font-bold">Unicoc</Text>
          <View className="w-10 h-8">
            <Image source={chip} className="w-10 h-8" style={{ objectFit: "contain" }} />
          </View>
        </View>
        <Image source={profile} className="w-40 h-40 rounded-full mx-auto my-16" />
        <Text className="text-lg">{info.rol}</Text>
        <Text className="text-3xl font-semibold">{info.nombre}</Text>
      </View>
      <LinearGradient
        className="flex-row items-center justify-between px-6 py-6"
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={["#707070", "#313131"]}>
        <View>
          <Text className="text-white text-lg">{info.carrera}</Text>
          <Text className="text-white text-[20px] font-semibold">{info.identificacion}</Text>
        </View>
        <Text className="text-white text-xl bg-red-500 py-1 px-2 rounded-3xl">{info.sangre}</Text>
      </LinearGradient>
    </View>
  );
};

export default CarnetCard;
