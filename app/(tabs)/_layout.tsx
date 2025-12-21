import { Tabs } from "expo-router";
import TabBar from "@/components/layout/TabBar";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ tabBarLabel: "home" }} />
      <Tabs.Screen name="search" options={{ tabBarLabel: "search" }} />
      <Tabs.Screen name="transfert" options={{ tabBarLabel: "transfert" }} />
      <Tabs.Screen name="category" options={{ tabBarLabel: "category" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "profile" }} />
    </Tabs>
  );
}
