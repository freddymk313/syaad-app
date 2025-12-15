import { Tabs } from "expo-router";
import TabBar from "@/components/layout/TabBar";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} /> }
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="transfert" options={{ title: "Transfert" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
