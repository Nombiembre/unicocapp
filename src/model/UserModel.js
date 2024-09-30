import { firebaseConfig } from "../../firebase";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { router } from "expo-router";
import { $userToken } from "../../src/context/userToken";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class UserModel {
  static login(username, password) {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        $userToken.set(user);
        router.replace("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static register(username, password, displayName) {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated.");
          })
          .catch((error) => {
            console.log(error);
          });
        $userToken.set(user);
        router.replace("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static logout() {
    $userToken.set("soy nulo");
    router.replace("/");
  }

  static getUserInfo() {}
}
