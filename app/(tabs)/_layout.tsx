import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} /> }
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="transfert" options={{ title: "Transfert" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
