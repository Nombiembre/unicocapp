import { Text, View } from "react-native";
import React from "react";
import { $userToken } from "../../src/context/userToken";
import { useStore } from "@nanostores/react";
import { TouchableOpacity } from "react-native";
import { UserModel } from "../../src/model/UserModel";
import HomeLayout from "../../src/layouts/HomeLayout";

const Home = () => {
  const user = useStore($userToken);

  return (
    <HomeLayout>
      <Text className="text-3xl font-semibold text-slate-700 text-center">
        Hola {user.displayName}
      </Text>
      <TouchableOpacity onPress={() => UserModel.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </HomeLayout>
  );
};

export default Home;
