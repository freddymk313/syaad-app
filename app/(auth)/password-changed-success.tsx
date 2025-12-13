import {
  View,
  Text,
  Dimensions,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// ---------------- TYPES ET CONSTANTES ----------------
type RootStackParamList = {
  PasswordChangedSuccess: undefined;
  Login: undefined; // Pour naviguer vers l'écran de connexion
};

type PasswordChangedSuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PasswordChangedSuccess"
>;

const { height, width } = Dimensions.get("window");
const ICON_SIZE = width * 0.3; // Taille pour le cercle central

// ---------------- COMPONENT ----------------
export default function PasswordChangedSuccessScreen({
  navigation,
}: PasswordChangedSuccessScreenProps) {
  const router = useRouter();

  // Option 1: Redirection automatique après quelques secondes
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleGoToLoginPress();
  //   }, 3000); // Redirection après 3 secondes

  //   return () => clearTimeout(timer); // Nettoyage
  // }, []);

  const handleGoToLoginPress = () => {
    // Une fois le mot de passe changé, on redirige vers l'écran de connexion
    router.navigate("/(auth)/login");
  };

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
          Password Has Been Changed Successfully
        </Text>
      </View>
    </View>
  );
}
