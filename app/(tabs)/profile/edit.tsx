import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputField from "@/components/form/InputField";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28;
const AVATAR_SIZE = 117;
const CARD_OVERLAP = 60;

export default function EditProfileScreen() {
  const router = useRouter();

  // États pour les formulaires
  const [username, setUsername] = useState("John Smith");
  const [phone, setPhone] = useState("+44 555 5555 55");
  const [email, setEmail] = useState("example@example.com");
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 1. HEADER BLEU */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-bold">Edit My Profile</Text>

          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. AVATAR AVEC BOUTON CAMERA */}
      <View
        style={{
          position: "absolute",
          top: HEADER_HEIGHT - CARD_OVERLAP - AVATAR_SIZE / 2,
          alignSelf: "center",
          zIndex: 20,
        }}
      >
        <View>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={{
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              borderRadius: AVATAR_SIZE / 2,
            }}
          />
          <Pressable
            className="absolute bottom-1 right-1 bg-[#0088FF] p-2 rounded-full *border-2 border-white"
            onPress={() => console.log("Change photo")}
          >
            <Feather name="camera" size={14} color="white" />
          </Pressable>
        </View>
      </View>

      {/* 3. CARD DE FORMULAIRE */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
        }}
        contentContainerStyle={{
          paddingTop: AVATAR_SIZE / 2 + 10,
          paddingHorizontal: 24,
          paddingBottom: 40,
        }}
      >
        {/* INFOS UTILISATEUR RÉSUMÉES */}
        <View className="items-center mb-8">
          <Text className="text-xl font-semibold text-[#093030]">
            John Smith
          </Text>
          <Text className="text-sm text-gray-400">ID: 25030024</Text>
        </View>

        <Text className="text-[#093030] text-xl font-bold mb-4">
          Account Settings
        </Text>

        {/* CHAMPS DE SAISIE */}
        <View className="gap-4 mb-6">
          <View>
            <Text className="text-gray-500 mb-2 ml-1">Username</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              className="bg-[#F2F8FF] px-5 py-4 rounded-2xl text-[#093030] font-medium"
            />
          </View>

          <View>
            <Text className="text-gray-500 mb-2 ml-1">Phone</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              className="bg-[#F2F8FF] px-5 py-4 rounded-2xl text-[#093030] font-medium"
            />
          </View>

          <View>
            <Text className="text-[#093030] mb-2 ml-1">Email Address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="bg-[#F2F8FF] px-5 py-4 rounded-2xl text-[#093030] font-medium"
            />

            {/* <Text className="text-[#093030] mb-2 mt-3.5">Email Address</Text>
              <InputField
                // Icon={undefined}
                placeholder="********"
                value={email}
                onChangeText={setEmail}
                secureTextEntry
              /> */}
          </View>
        </View>

        {/* RÉGLAGES SWITCHES */}
        <View className="mb-8 gap-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-[#093030] font-semibold">
              Push Notifications
            </Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={setIsNotificationsEnabled}
              trackColor={{ false: "#D1D1D1", true: "#0088FF" }}
              thumbColor="white"
            />
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-[#093030] font-semibold">
              Turn Dark Theme
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#D1D1D1", true: "#0088FF" }}
              thumbColor="white"
            />
          </View>
        </View>

        {/* BOUTON UPDATE */}
        <Pressable
          className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center"
          onPress={() => console.log("Profile Updated")}
        >
          <Text
            // className="text-white"
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 15,
              color: "#FFFFFF",
            }}
          >
            Update Profile
          </Text>
        </Pressable>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
