import Home from "./(tabs)/home.jsx";
import { Redirect } from "expo-router";
import AuthScreen from "./AuthScreen.jsx";
import { $userToken } from "../src/context/userToken.js";
import { useStore } from "@nanostores/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function Page() {
  const userToken = useStore($userToken);

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      $userToken.set(userToken);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  // return <Redirect href="/home" />;
  // return sesuinIniciada ? <Home /> : <Redirect href="/home" />;
  return userToken !== "soy nulo" ? <Redirect href="/home" /> : <AuthScreen />;
}
