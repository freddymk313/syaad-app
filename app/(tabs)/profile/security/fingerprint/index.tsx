import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// Icônes
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FingerPrintIcon } from "react-native-heroicons/outline";

// --- TYPESCRIPT INTERFACES ---
interface FingerprintItemProps {
  label: string;
  onPress: () => void;
  isAdd?: boolean; // Le '?' rend la propriété optionnelle
}

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.23;
const CARD_OVERLAP = 60;

// --- COMPOSANT ENFANT TYPÉ ---
const FingerprintItem: React.FC<FingerprintItemProps> = ({ 
  label, 
  onPress, 
  isAdd = false 
}) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between py-5"
  >
    <View className="flex-row items-center">
      {/* Cercle d'icône bleu */}
      <View className="w-14.25 h-13.5 rounded-[22px] bg-[#3299FF] items-center justify-center mr-4">
        {isAdd ? (
          <Feather name="plus" size={26} color="white" />
        ) : (
          <FingerPrintIcon size={28} color="white" />
        )}
      </View>
      
      <Text className="text-[#093030] text-lg font-semibold">
        {label}
      </Text>
    </View>

    <Feather name="chevron-right" size={24} color="#093030" />
  </Pressable>
);

// --- ÉCRAN PRINCIPAL ---
export default function FingerprintScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER GRADIENT */}
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

          <Text className="text-white text-xl font-bold">Fingerprint</Text>

          <Pressable className="bg-[#DFEFF8] p-1.5 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARTE BLANCHE SUPERPOSÉE */}
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
          paddingTop: 45,
          paddingHorizontal: 28,
          paddingBottom: 40,
        }}
      >
        {/* <Text className="text-[#093030] text-2xl font-bold mb-6">
          Fingerprint
        </Text> */}

        <View>
          <FingerprintItem 
            label="John Fingerprint" 
            onPress={() => router.push("/profile/security/fingerprint/detail" as any)} 
          />
          
          <FingerprintItem 
            label="Add A Fingerprint" 
            isAdd={true}
            onPress={() => router.push("/profile/security/fingerprint/add" as any)} 
          />
        </View>
      </ScrollView>
    </View>
  );
}