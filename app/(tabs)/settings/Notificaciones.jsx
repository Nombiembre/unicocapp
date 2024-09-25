import { View, Text, Image } from "react-native";
import React from "react";
import underConstruction from "../../../src/assets/underConstruction.jpeg";

const Notificaciones = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={underConstruction} />
    </View>
  );
};

export default Notificaciones;
