import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { $userToken } from "../../src/context/userToken";
import { useStore } from "@nanostores/react";
import { TouchableOpacity } from "react-native";
import { UserModel } from "../../src/model/UserModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const user = useStore($userToken);
  let userToken;
  const isLoggedIn = async () => {
    try {
      userToken = await AsyncStorage.getItem("userToken");
      $userToken.set(userToken);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const data = {
    _redirectEventId: undefined,
    apiKey: "AIzaSyBY_cvUwP5tl0gSZWTIAY88z4JsHfWyHfQ",
    appName: "[DEFAULT]",
    createdAt: "1727286721122",
    displayName: undefined,
    email: "toro@gei.com",
    emailVerified: false,
    isAnonymous: false,
    lastLoginAt: "1727309556035",
    phoneNumber: undefined,
    photoURL: undefined,
    providerData: [[Object]],
    stsTokenManager: {
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjYzNmY2I2NDAzMjc2MGVlYjljMjZmNzdkNDA3YTY5NGM1MmIwZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY29jYXBwIiwiYXVkIjoidW5pY29jYXBwIiwiYXV0aF90aW1lIjoxNzI3MzA5NjExLCJ1c2VyX2lkIjoib1M5OHlnYzhNZ1RjNzQ1aHhRMDRkUGdwdkxwMSIsInN1YiI6Im9TOTh5Z2M4TWdUYzc0NWh4UTA0ZFBncHZMcDEiLCJpYXQiOjE3MjczMDk2MTEsImV4cCI6MTcyNzMxMzIxMSwiZW1haWwiOiJ0b3JvQGdlaS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidG9yb0BnZWkuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Nlf39yCpgMKPLbp5QKsWnLcKhdyK7FQZlwOVoQX17wm4vN7OCAGPZl5P5RTRCBBpiSgWKzftnReht07RemJb-KncIgrv_mIRMri95h2izVJlvnZ53bwhA6ef3IOF9LBNcfnqmnWXxXE8EMDDAhanoBKVvi8E-qDTYIIXWRwyDi2NXmXFCd6oCMDXvLAyva8y824HlO7LJK8mguYvkkSfIA4brHT4ds6klZo0sDF1zdxPr4h-spLianjItjl6iaEycuOw0UNDOd1wFGJidZFNeAVs5Gb9yjCOPH-cC3gnkTe0TzHTawC_waXFZK4qL8u_SJMeb8u4XjH7o7t4d-15FQ",
      expirationTime: 1727313211664,
      refreshToken:
        "AMf-vBxnxca-yfUAUwYXfmx8L-OFZg5WIGYyLyDNKEGFF7yN5CdolvWM1NUJpBEsFnwyw9p876m9vutbYHI4jVaLBCirByThdcZ1zUM8owdSDbbXu0Kk7mQwqOQ2rBaIGCor0uRl7gCqEEbQkgyj4tbhwn2sjqU8OKBkE4q1fQ6gSlmLUqu3tKulGXo_qB1CjF8G0r5nheNk",
    },
    tenantId: undefined,
    uid: "oS98ygc8MgTc745hxQ04dPgpvLp1",
  };
  return (
    <View>
      <Text>Hola </Text>
      <TouchableOpacity onPress={() => UserModel.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
