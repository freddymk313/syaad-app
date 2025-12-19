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
const HEADER_HEIGHT = height * 0.28;
const AVATAR_SIZE = 117;
const CARD_OVERLAP = 60;

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { label: "Edit Profile", icon: "user", onPress: () => { router.push("/profile/edit"); } },
    { label: "Security", icon: "shield", onPress: () => { router.push("/profile/security"); } },
    { label: "Setting", icon: "settings", onPress: () => {} },
    { label: "Help", icon: "help-circle", onPress: () => {} },
    { label: "Logout", icon: "log-out", onPress: () => {} },
  ];

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]} // 1% pour #0088FF, 45% pour #005299
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        {/* HEADER */}
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-bold fontp">Profile</Text>

          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      <View
        style={{
          position: "absolute",
          top: HEADER_HEIGHT - CARD_OVERLAP - (AVATAR_SIZE / 2),
          alignSelf: "center",
          zIndex: 20, // Toujours au-dessus de tout
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE / 2,
            // borderWidth: 4,
            // borderColor: "#fff",
          }}
        />
      </View>

      {/* CARD */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // className="flex-1 bg-white rounded-t-[60px] -mt-16 px-6 pt-20"
        style={{
          // flex: 1,
          // backgroundColor: "white",
          // borderTopLeftRadius: 60,
          // borderTopRightRadius: 60,
          // // marginTop: -40,
          // paddingTop: AVATAR_SIZE / 2 + 20, // 👈 place les infos sous l’avatar
          // paddingHorizontal: 24,

          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingTop: AVATAR_SIZE / 2 + 20,
          marginTop: -CARD_OVERLAP, // Fait remonter la carte sur le bleu
          zIndex: 10,
          paddingHorizontal: 24,
        }}
      >
        {/* AVATAR */}
        {/* <View
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
        </View> */}

        {/* USER INFO */}
        {/* <View className="items-center mb-10">
          <Text className="text-xl font-semibold text-[#093030]">
            John Smith
          </Text>
          <Text className="text-sm text-gray-400 mt-1">ID: 25030024</Text>
        </View> */}

        <View className="items-center mb-10">
          <Text className="text-xl font-semibold text-[#093030]">
            John Smith
          </Text>
          <Text className="text-sm text-[#093030] mt-1">ID: 25030024</Text>
        </View>

        {/* MENU */}
        <View className="gap-6">
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              onPress={item.onPress}
              className="flex-row items-center"
            >
              <View className="w-14.25 h-13.25 rounded-[22px] bg-[#3299FF] items-center justify-center mr-4">
                <Feather name={item.icon as any} size={24} color="#fff" />
              </View>

              <Text className="text-[#093030] text-base font-medium">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
