import { Redirect } from "expo-router";
import AuthScreen from "./AuthScreen.jsx";
import { $userToken } from "../src/context/userToken.js";
import { useStore } from "@nanostores/react";

export default function Page() {
  const userToken = useStore($userToken);

  return userToken !== "soy nulo" ? <Redirect href="/home" /> : <AuthScreen />;
}
