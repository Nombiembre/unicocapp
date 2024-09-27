import { Link, Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Info from "../../src/components/common/Info";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <Link href="cuenta"></Link>,
        headerRight: () => <Info />,
        headerTitle: "",
        headerTitleAlign: "center",
        tabBarStyle: {
          minHeight: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#334155",
        tabBarInactiveTintColor: "#b7b7b7",
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="Carnet"
        options={{
          title: "Carnet",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="id-badge" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Horario"
        options={{
          title: "Horario",
          tabBarIcon: ({ color, size }) => <AntDesign name="calendar" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Eventos"
        options={{
          title: "Locker",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="locker" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
