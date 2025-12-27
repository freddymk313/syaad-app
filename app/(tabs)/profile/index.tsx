import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
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
  const [isModalVisible, setModalVisible] = useState(false);

  const menuItems = [
    {
      label: "Edit Profile",
      icon: "user",
      onPress: () => {
        router.push("/profile/edit");
      },
    },
    {
      label: "Security",
      icon: "shield",
      onPress: () => {
        router.push("/profile/security");
      },
    },
    { label: "Setting", icon: "settings", onPress: () => {} },
    { label: "Help", icon: "help-circle", onPress: () => {} },
    { label: "Logout", icon: "log-out", onPress: () => setModalVisible(true) },
  ];

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0, 0.74]} // 1% pour #0088FF, 45% pour #005299
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
          top: HEADER_HEIGHT - CARD_OVERLAP - AVATAR_SIZE / 2,
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
              <View className="w-14.25 h-13.5 rounded-[22px] bg-[#3299FF] items-center justify-center mr-4">
                <Feather name={item.icon as any} size={24} color="#fff" />
              </View>

              <Text className="text-[#093030] text-base font-medium">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* MODAL DE DÉCONNEXION */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Overlay sombre en arrière-plan */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          {/* Conteneur Blanc */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 40,
              width: "100%",
              padding: 32,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "#1E1E1E",
                marginBottom: 12,
              }}
            >
              End Session
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "#363130",
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              Are you sure you want to log out?
            </Text>

            {/* Bouton "Yes, End Session" */}
            <Pressable
              onPress={() => {
                setModalVisible(false);
                // Ajoutez votre logique de déconnexion ici (ex: router.replace('/login'))
              }}
              style={{
                backgroundColor: "#0088FF",
                width: "100%",
                height: 50,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "600" }}
              >
                Yes, End Session
              </Text>
            </Pressable>

            {/* Bouton "Cancel" */}
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: "#DFEFF8",
                width: "100%",
                height: 50,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#0E3E3E", fontSize: 18, fontWeight: "600" }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="light" />
    </View>
  );
}
