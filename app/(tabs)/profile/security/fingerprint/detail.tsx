import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// Icônes
import Ionicons from "@expo/vector-icons/Ionicons";
import { FingerPrintIcon } from "react-native-heroicons/outline";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.23;
const CARD_OVERLAP = 60;

export default function FingerprintDetailScreen() {
  const router = useRouter();

  // Pour correspondre au texte de la maquette Figma "Jhon Fingerprint"
  const fingerprintName = "Jhon Fingerprint";

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER GRADIENT (Inspiration 9.5.2 - E) */}
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

          <Text className="text-white text-xl font-bold">{fingerprintName}</Text>

          <Pressable className="bg-[#DFEFF8] p-1.5 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARTE BLANCHE SUPERPOSÉE */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false} // Pas besoin de scroller ici selon le design
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
          paddingTop: 60,
          paddingHorizontal: 28,
        }}
      >
        {/* GRANDE ICÔNE D'EMPREINTE (Centrée) */}
        <View className="w-40 h-40 rounded-full bg-[#3299FF] items-center justify-center shadow-sm mb-10">
          <FingerPrintIcon size={100} color="white" />
        </View>

        {/* AFFICHAGE DU NOM (Style Input désactivé) */}
        <View className="w-full bg-[#DFEFF8] py-4 rounded-2xl items-center mb-12">
          <Text className="text-[#093030] text-lg font-semibold">
            {fingerprintName}
          </Text>
        </View>

        {/* BOUTON DELETE */}
        <Pressable 
          onPress={() => console.log("Delete pressed")}
          className="w-full bg-[#0088FF] py-4 rounded-full items-center shadow-md active:opacity-80"
        >
          <Text className="text-white text-lg font-bold">Delete</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}