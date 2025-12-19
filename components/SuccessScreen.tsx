import React, { useEffect } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// Définition des types pour les props
interface SuccessScreenProps {
  title: string; // Le texte dynamique
  onFinished?: () => void; // Fonction appelée après le délai (optionnel)
  duration?: number; // Temps d'attente en ms (défaut 3000ms)
}

const { width } = Dimensions.get("window");
const ICON_SIZE = width * 0.3;

export default function SuccessScreen({
  title,
  onFinished,
  duration = 3000,
}: SuccessScreenProps) {
  useEffect(() => {
    if (onFinished) {
      const timer = setTimeout(() => {
        onFinished();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [onFinished, duration]);

  return (
    <View className="flex-1 bg-[#3299FF]">
      <StatusBar style="light" />

      <View className="flex-1 items-center justify-center p-8">
        {/* Cercle d'icône / Indicateur de succès */}
        <View>
          <Image
            source={require("@/assets/images/succes.png")}
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
          />
        </View>

        {/* Message de succès */}
        <Text
          // className="text-white text-center text-2xl"
          style={{
            fontFamily: "PoppinsBold",
            fontWeight: "bold",
            fontSize: 20,
            color: "#DFF7E2",
            textAlign: "center",
            marginTop: 24,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
