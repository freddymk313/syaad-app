import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// Icônes
import Ionicons from "@expo/vector-icons/Ionicons";
import { FingerPrintIcon } from "react-native-heroicons/outline";

const { height, width } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.23;
const CARD_OVERLAP = 60;
const FINGERPRINT_ICON_SIZE = width * 0.4; // Taille proportionnelle pour le cercle

export default function AddFingerprintScreen() {
  const router = useRouter();

  const handleTouchIdAction = () => {
    console.log("Démarrage du scan biométrique...");
    // Ici, vous ajouteriez la logique de succès ou navigation
    router.push({
      pathname: "/(flow)/success",
      params: {
        title: "Fingerprint Has Been Changed Successfully",
        backTo: "/(tabs)/profile/security",
      },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER GRADIENT (Identique aux autres pour la cohérence) */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()} className="p-1">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-bold">Add Fingerprint</Text>

          <Pressable className="bg-[#DFEFF8] p-1.5 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARTE BLANCHE SUPERPOSÉE */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={Platform.OS === "ios"}
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
        }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 85,
          paddingHorizontal: 28,
          paddingBottom: 40,
        }}
      >
        {/* GRANDE ICÔNE D'EMPREINTE (Centrée) */}
        <View
          //   style={{
          //     width: FINGERPRINT_ICON_SIZE,
          //     height: FINGERPRINT_ICON_SIZE,
          //     borderRadius: FINGERPRINT_ICON_SIZE / 2,
          //   }}
          style={{
            width: FINGERPRINT_ICON_SIZE,
            height: FINGERPRINT_ICON_SIZE,
            borderRadius: FINGERPRINT_ICON_SIZE / 2,
            backgroundColor: "#3299FF", // Couleur de fond du cercle
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 35,
          }}
        //   className="mb-10"
        >
          <FingerPrintIcon size={FINGERPRINT_ICON_SIZE * 0.6} color="white" />
        </View>

        {/* TEXTES D'INSTRUCTIONS */}
        <Text className="text-[#093030] text-2xl font-bold text-center mb-4">
          Use Fingerprint To Access
        </Text>

        <Text className="text-gray-500 text-center text-base leading-6 mb-12 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>

        {/* BOUTON "Use Touch Id" (Couleur bleu clair selon Figma) */}
        <Pressable
          onPress={handleTouchIdAction}
          className="bg-[#DFEFF8] py-4 w-[85%] rounded-full items-center justify-center mb-8 shadow-sm active:opacity-70"
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 16,
              color: "#0E3E3E",
            }}
          >
            Use Touch Id
          </Text>
        </Pressable>

        {/* LIEN ALTERNATIF */}
        <Pressable onPress={() => router.push("/(auth)/securitypin" as any)}>
          <Text className="text-gray-400 text-sm font-semibold">
            ¿Or prefer use pin code?
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
