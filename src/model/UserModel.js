import { firebaseConfig } from "../../firebase";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { $userToken } from "../../src/context/userToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class UserModel {
  static login(username, password) {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        $userToken.set(user);
        AsyncStorage.setItem("userToken", user);
        router.replace("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static register(username, password) {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        $userToken.set(user);
        AsyncStorage.setItem("userToken", user);
        router.replace("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static logout() {
    AsyncStorage.removeItem("userToken");
    $userToken.set("soy nulo");
    router.replace("/");
  }

  static getUserInfo() {}
}
