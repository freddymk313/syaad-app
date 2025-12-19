import {
  View,
  Text,
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
const HEADER_HEIGHT = height * 0.25;
const CARD_OVERLAP = 60;

// Composant réutilisable pour les lignes du menu de sécurité
const SecurityItem = ({ label, onPress } : any) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between py-6 border-b border-[#DFF7E2]"
  >
    <Text className="text-[#093030] text-lg font-medium">{label}</Text>
    <Feather name="chevron-right" size={24} color="#093030" />
  </Pressable>
);

export default function SecurityScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 1. HEADER BLEU GRADIENT */}
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

          <Text className="text-white text-xl font-bold">Security</Text>

          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARD BLANCHE (ScrollView) */}
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
          paddingTop: 40,
          paddingHorizontal: 30,
          paddingBottom: 40,
        }}
      >
        {/* TITRE DE SECTION DANS LA CARTE */}
        <Text className="text-[#093030] text-2xl font-bold mb-6">Security</Text>

        {/* LISTE DES OPTIONS */}
        <View>
          <SecurityItem 
            label="Change Pin" 
            onPress={() => router.push("/profile/security/change-pin")} 
          />
          <SecurityItem 
            label="Fingerprint" 
            onPress={() => router.push("/profile/security/fingerprint")} 
          />
          <SecurityItem 
            label="Terms And Conditions" 
            onPress={() => console.log("Terms pressed")} 
          />
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}