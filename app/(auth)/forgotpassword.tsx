import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UserIcon } from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import InputField from "@/components/InputField"; // Assurez-vous que ce chemin est correct
import { useRouter } from "expo-router";
import { SvgProps } from "react-native-svg"; // Nécessaire pour le type Icon

// ********************************************
// NOTE: J'ai utilisé 'UserIcon' comme icône temporaire
// pour le champ Email car l'icône de l'image (enveloppe/email)
// n'est pas disponible dans les icônes de votre référence.
// Vous devrez peut-être ajuster le composant InputField
// si vous voulez une icône Email plus spécifique.
// ********************************************

// Définitions de type minimales pour cet écran
type RootStackParamList = {
  ForgotPassword: undefined;
  Login: undefined;
  SignUp: undefined;
};

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

// Interface pour le composant InputField (copiée de votre référence)
interface InputFieldProps {
  Icon: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28; // Hauteur de la zone dégradée

export default function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = React.useState<string>("");
  const router = useRouter();

  const handleNextStepPress = () => {
    // Logique pour l'étape suivante (ex: envoi d'un email de réinitialisation)
    console.log("Next Step pressed with email:", email);
    router.navigate("/(auth)/securitypin");
  };

  const handleSignUpPress = () => {
    router.navigate("/(auth)/register"); // Naviguer vers l'écran d'inscription
  };

  const handleSignInPress = () => {
    router.navigate("/(auth)/login"); // Naviguer vers l'écran de connexion
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
          {/* Header */}
          <View
            style={{
              height: HEADER_HEIGHT,
              paddingTop: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-3xl font-semibold text-[#FFFFFF]">
              Forgot Password
            </Text>
          </View>

          {/* Card */}
          <ScrollView
            className="bg-[#FFFFFF] rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 40,
              flexGrow: 1, // Assure que la ScrollView prend tout l'espace disponible
            }}
          >
            <View className="flex-1 items-center">
              {/* Titre et description */}
              <View className="w-full mb-2">
                <Text className="text-2xl font-bold text-[#0E3E3E] mt-4 mb-2">
                  Reset Password?
                </Text>
                <Text className="text-sm text-[#0E3E3E] mb-8 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>

              {/* Champ de saisie Email */}
              <View className="w-full mb-8">
                <Text className="text-[#093030] mb-2">Enter Email Address</Text>
                <InputField
                  Icon={UserIcon} // Utilisation de UserIcon comme substitut pour Email
                  placeholder="example@example.com"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* Bouton Next Step */}
              <Pressable
                className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center mb-8"
                onPress={handleNextStepPress}
              >
                <Text
                  // className="text-white"
                  style={{ fontFamily: "PoppinsBold", fontSize: 15, color: "#FFFFFF" }}
                >
                  Next Step
                </Text>
              </Pressable>

              {/* Section Sign Up */}
              <View className="w-full items-center">
                <Text className="text-[#093030] text-center text-xs mb-3">
                  Or sign up with
                </Text>

                {/* Icônes sociales */}
                <View className="flex-row justify-center gap-6 mb-8">
                  <TouchableOpacity>
                    {/* Assurez-vous d'avoir l'image facebook.png dans le bon chemin */}
                    <Image
                      source={require("@/assets/logo/facebook.png")}
                      className="w-10 h-10"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    {/* Assurez-vous d'avoir l'image google.png dans le bon chemin */}
                    <Image
                      source={require("@/assets/logo/google.png")}
                      className="w-10 h-10"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                {/* Lien Sign Up / Don't have an account? */}
                <Pressable
                  className="bg-[#F2F2F7] py-4 w-[60%] self-center rounded-full items-center justify-center *border border-[#0088FF]"
                  onPress={handleSignUpPress}
                >
                  <Text
                    // className="text-[#0E3E3E]"
                    style={{
                      fontFamily: "PoppinsBold",
                      fontSize: 15,
                      color: "#0E3E3E",
                    }}
                  >
                    Sign Up
                  </Text>
                </Pressable>

                {/* <View className="flex-row justify-center mt-4">
                  <Text className="text-gray-500">Don't have an account?</Text>
                  <TouchableOpacity onPress={handleSignUpPress}>
                    <Text className="text-[#0088FF] font-semibold ml-1">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>

              {/* Lien Don't have an account? Sign Up (en bas) */}
              <View className="flex-row justify-center mt-6">
                <Text className="text-gray-500">Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUpPress}>
                  <Text className="text-[#0088FF] font-semibold ml-1">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}
