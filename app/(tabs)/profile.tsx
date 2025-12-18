import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.3;
const AVATAR_SIZE = 110;

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { label: "Edit Profile", icon: "user", onPress: () => {} },
    { label: "Security", icon: "shield", onPress: () => {} },
    { label: "Setting", icon: "settings", onPress: () => {} },
    { label: "Help", icon: "help-circle", onPress: () => {} },
    { label: "Logout", icon: "log-out", onPress: () => {} },
  ];

  return (
    <>
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0, 1]}
        style={{ height: HEADER_HEIGHT }}
      >
        {/* HEADER */}
        <View className="flex-row items-center justify-between px-6 pt-17">
          <Pressable onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-semibold">
            Profile
          </Text>

          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* CARD */}
      <ScrollView
        className="flex-1 bg-white rounded-t-[60px] -mt-16 px-6 pt-20"
        showsVerticalScrollIndicator={false}
      >
        {/* AVATAR */}
        <View
          style={{
            position: "absolute",
            top: -AVATAR_SIZE / 2,
            alignSelf: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
            style={{
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              borderRadius: AVATAR_SIZE / 2,
              borderWidth: 4,
              borderColor: "#fff",
            }}
          />
        </View>

        {/* USER INFO */}
        <View className="items-center mb-10">
          <Text className="text-xl font-semibold text-[#093030]">
            John Smith
          </Text>
          <Text className="text-sm text-gray-400 mt-1">
            ID: 25030024
          </Text>
        </View>

        {/* MENU */}
        <View className="space-y-6">
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              onPress={item.onPress}
              className="flex-row items-center"
            >
              <View className="w-12 h-12 rounded-full bg-[#3299FF] items-center justify-center mr-4">
                <Feather name={item.icon as any} size={22} color="#fff" />
              </View>

              <Text className="text-[#093030] text-base font-medium">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </>
  );
}
