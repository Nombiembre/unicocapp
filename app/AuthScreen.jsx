import { Image, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import LinkButton from "../src/components/LinkButton";
import { Stack } from "expo-router";
import unicocLogo from "../src/assets/unicocLogo.png";

export default function AuthScreen() {
  return (
    <AuthLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image
        source={unicocLogo}
        style={{ width: 350, height: 150 }}
        className="mx-auto object-contain w-full h-full"
      />
      <View style={{ gap: 12, marginTop: "auto" }}>
        <LinkButton class="bg-red-500" enlace="/Login">
          Iniciar Sesión
        </LinkButton>

        <LinkButton class="bg-red-500" enlace="/Register">
          Registrarse
        </LinkButton>
      </View>
    </AuthLayout>
  );
}
