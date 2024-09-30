import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import calendarioPng from "../../src/assets/calendario.png";

const Horario = () => {
  return (
    <ScrollView>
      <Image source={calendarioPng} className="w-full" />
    </ScrollView>
  );
};

export default Horario;
