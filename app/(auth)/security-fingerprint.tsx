import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { FingerPrintIcon } from "react-native-heroicons/outline"; // Utilisation de l'icône empreinte

// ---------------- TYPES ET CONSTANTES ----------------
type RootStackParamList = {
  SecurityFingerprint: undefined;
  Login: undefined; 
  SecurityPin: undefined; // Pour naviguer vers l'option "Use pin code"
};

type SecurityFingerprintScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SecurityFingerprint"
>;

const { height, width } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28;
const FINGERPRINT_ICON_SIZE = width * 0.4; // Taille pour l'icône centrale

// ---------------- COMPONENT ----------------
export default function SecurityFingerprintScreen({
  navigation,
}: SecurityFingerprintScreenProps) {
  const router = useRouter();

  const handleUseTouchIdPress = () => {
    console.log("Touch ID/Fingerprint scan initiated.");
    // Logique pour déclencher l'authentification biométrique native
    // Après succès, on naviguerait vers l'écran d'accueil ou l'écran suivant.
    // router.navigate("/(tabs)/home"); 
  };

  const handleUsePinCodePress = () => {
    console.log("Use pin code pressed.");
    // Navigation vers l'écran de code PIN (similaire à SecurityPinScreen)
    router.navigate("/(auth)/securitypin"); 
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View className="flex-1">
          {/* HEADER */}
          <View
            style={{
              height: HEADER_HEIGHT,
              paddingTop: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-3xl font-semibold text-[#FFFFFF]">
              Security Fingerprint
            </Text>
          </View>

          {/* CARD */}
          <ScrollView
            className="bg-white rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ 
                flexGrow: 1, 
                alignItems: 'center', 
                paddingTop: 40 
            }}
          >
            <View className="flex-1 items-center w-full">
              
              {/* Cercle d'Empreinte Digitale */}
              <View
                style={{
                  width: FINGERPRINT_ICON_SIZE,
                  height: FINGERPRINT_ICON_SIZE,
                  borderRadius: FINGERPRINT_ICON_SIZE / 2,
                  backgroundColor: "#3299FF", // Couleur de fond du cercle
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mb-10"
              >
                {/* Icône d'Empreinte Digitale au centre */}
                <FingerPrintIcon color="#E9F6FE" size={FINGERPRINT_ICON_SIZE * 0.6} />
              </View>

              {/* Message d'instruction */}
              <Text
                className="text-[#093030] text-center text-lg font-semibold mt-9 mb-2"
              >
                Use Fingerprint To Access
              </Text>
              <Text
                className="text-gray-500 text-center text-sm mb-12 max-w-[80%]"
              >
                Use fingerprint or secure login,
                elit, sed do eiusmod tempor incididunt.
              </Text>

              {/* Bouton Touch ID */}
              <Pressable
                className="bg-[#DFEFF8] py-4 w-[60%] rounded-full items-center justify-center mb-8"
                onPress={handleUseTouchIdPress}
              >
                <Text
                  // className="text-white"
                  style={{ fontFamily: "PoppinsBold", fontSize: 15, color: "#0E3E3E" }}
                >
                  Use Touch Id
                </Text>
              </Pressable>

              {/* Lien Pin Code */}
              <TouchableOpacity onPress={handleUsePinCodePress}>
                <Text className="text-sm text-gray-500 font-semibold">
                  Or prefer use pin code?
                </Text>
              </TouchableOpacity>
              
            </View>
          </ScrollView>
        </View>
      </LinearGradient>

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}