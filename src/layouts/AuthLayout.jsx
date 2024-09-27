import { View, Image } from "react-native";

export default function AuthLayout({ children, classes }) {
  return (
    <View
      style={[{ flexGrow: 1, paddingBottom: 10, paddingHorizontal: 12 }]}
      className={`pt-20 ${classes}`}>
      {children}
    </View>
  );
}
