import {
  View,
  Text,
  Dimensions,
  Pressable,
  Platform,
  KeyboardAvoidingView,
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
const ICON_SIZE = width * 0.4; // Taille pour le cercle central

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
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        // Utilisation du même dégradé bleu que vos autres écrans pour le fond
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <StatusBar style="light" />

        <View className="flex-1 items-center justify-center p-8">
          
          {/* Cercle d'icône / Indicateur de succès */}
          <View
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              borderRadius: ICON_SIZE / 2,
              backgroundColor: "rgba(255, 255, 255, 0.3)", // Cercle extérieur transparent
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mb-10"
          >
            <View
              style={{
                width: ICON_SIZE * 0.35,
                height: ICON_SIZE * 0.35,
                borderRadius: (ICON_SIZE * 0.35) / 2,
                backgroundColor: "#FFFFFF", // Point blanc central
              }}
            />
          </View>

          {/* Message de succès */}
          <Text
            className="text-white text-center text-2xl"
            style={{ fontFamily: "PoppinsBold", fontWeight: "700" }}
          >
            Password Has Been Changed Successfully
          </Text>

          {/* Bouton pour revenir à l'écran de connexion */}
          {/* L'image de référence ne montre pas de bouton, mais c'est essentiel 
              pour la navigation utilisateur. J'ajoute un bouton "Go to Login" 
              avec le style de vos autres écrans. */}
          <Pressable
            className="bg-[#FFFFFF] py-4 w-[80%] rounded-full items-center justify-center mt-20"
            onPress={handleGoToLoginPress}
          >
            <Text
              className="text-[#0088FF]"
              style={{ fontFamily: "PoppinsBold", fontSize: 15, fontWeight: "600" }}
            >
              Go to Login
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}