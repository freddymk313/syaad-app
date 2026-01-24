import { useTranslation } from "@/hooks/useTranslation";
import i18n from "@/i18n";
import { useLanguageStore } from "@/store/language.store";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28;
const AVATAR_SIZE = 117;
const CARD_OVERLAP = 60;

export default function ProfileScreen() {
  const router = useRouter();

  // Modals
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  // Language store
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation(); // 🔥 se re-render à chaque changement de language

  const languages = [
    { id: "fr", label: "Français" },
    { id: "en", label: "English" },
    { id: "es", label: "Español" },
    { id: "zh", label: "中文 (Chinois)" },
  ];

  const currentLanguageLabel =
    languages.find((l) => l.id === language)?.label ?? "English";

  const menuItems = [
    {
      label: "Edit Profile",
      icon: "user",
      onPress: () => router.push("/profile/edit"),
    },
    {
      label: "Security",
      icon: "shield",
      onPress: () => router.push("/profile/security"),
    },
    { label: "Setting", icon: "settings", onPress: () => {} },
    {
      label: "Language",
      icon: "globe",
      onPress: () => setLanguageModalVisible(true),
    },
    {
      label: "Logout",
      icon: "log-out",
      onPress: () => setLogoutModalVisible(true),
    },
  ];

  const handleLanguageChange = (langId: string) => {
    setLanguage(langId); // met à jour le store
    i18n.locale = langId; // 🔥 force i18n à utiliser la nouvelle langue
    setLanguageModalVisible(false);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* HEADER */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0, 0.74]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold">{t("profile.profile")}</Text>
          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* AVATAR */}
      <View
        style={{
          position: "absolute",
          top: HEADER_HEIGHT - CARD_OVERLAP - AVATAR_SIZE / 2,
          alignSelf: "center",
          zIndex: 20,
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE / 2,
          }}
        />
      </View>

      {/* MENU */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingTop: AVATAR_SIZE / 2 + 20,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
          paddingHorizontal: 24,
        }}
      >
        <View className="items-center mb-10">
          <Text className="text-xl font-semibold text-[#093030]">
            John Smith
          </Text>
          <Text className="text-sm text-[#093030] mt-1">ID: 25030024</Text>
        </View>

        <View className="gap-6 mb-10">
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              onPress={item.onPress}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-[20px] bg-[#3299FF] items-center justify-center mr-4">
                  <Feather name={item.icon as any} size={22} color="#fff" />
                </View>
                <Text className="text-[#093030] text-base font-medium">
                  {item.label}
                </Text>
              </View>
              {item.label === "Language" && (
                <Text className="text-gray-400 text-sm">
                  {currentLanguageLabel}
                </Text>
              )}
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* MODAL LANGUE */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLanguageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              width: "100%",
              padding: 32,
              maxHeight: height * 0.6,
            }}
          >
            <View className="flex-row justify-between items-center mb-6">
              <Text
                style={{ fontSize: 22, fontWeight: "700", color: "#1E1E1E" }}
              >
                Select Language
              </Text>
              <Pressable onPress={() => setLanguageModalVisible(false)}>
                <Ionicons name="close-circle" size={30} color="#0088FF" />
              </Pressable>
            </View>

            {languages.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => handleLanguageChange(item.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#F0F0F0",
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: language === item.id ? "#0088FF" : "#363130",
                    fontWeight: language === item.id ? "700" : "400",
                  }}
                >
                  {item.label}
                </Text>
                {language === item.id && (
                  <Ionicons name="checkmark-circle" size={24} color="#0088FF" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>

      {/* MODAL LOGOUT */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLogoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
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
            <Pressable
              onPress={() => setLogoutModalVisible(false)}
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
            <Pressable
              onPress={() => setLogoutModalVisible(false)}
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
