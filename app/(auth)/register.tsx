import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  UserIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CalendarIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline"; // Nouvelles icônes pour les champs
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import InputField from "@/components/InputField"; // Assurez-vous que ce chemin est correct
import { useRouter } from "expo-router";

// --- Définition des Types (à adapter si vous utilisez une navigation différente) ---
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};
type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">;

const { height } = Dimensions.get("window");
// Réutilisation de la même hauteur d'en-tête que pour l'écran de Login
const HEADER_HEIGHT = height * 0.28;

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const router = useRouter();

  // États pour tous les champs d'inscription
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [mobileNumber, setMobileNumber] = React.useState<string>("");
  const [usernameOrDob, setUsernameOrDob] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const handleLoginPress = () => {
    router.navigate("/(auth)/login"); // Naviguer vers l'écran de connexion
    // router.back();
  };

  const handleRegister = () => {
    console.log("Inscription en cours...");
    // Logique d'inscription ici
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
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
            // className="flex justify-center items-center"
            style={{
              height: HEADER_HEIGHT,
              paddingTop: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-3xl font-semibold text-center text-[#FFFFFF]">
              Create Account
            </Text>
          </View>

          {/* Card */}
          <ScrollView
            // className="bg-[#FFFFFF] rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            // style={{ marginTop: -20, minHeight: height - HEADER_HEIGHT + 20, paddingBottom: 40 }}
            // showsVerticalScrollIndicator={false}
            className="bg-[#FFFFFF] rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            // style={{ marginTop: -20 }}
            contentContainerStyle={{ paddingBottom: 40 }} // pour que le bas soit visible
            // showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            // contentContainerStyle={{ paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Champs de Saisie */}
            <View className="mb-8 mt-6">
              <Text className="text-[#093030] mb-2">Full Name</Text>
              <InputField
                Icon={UserIcon}
                placeholder="Jean Dupont"
                value={fullName}
                onChangeText={setFullName}
              />

              <Text className="text-[#093030] mb-2 mt-3.5">Email</Text>
              <InputField
                Icon={EnvelopeIcon}
                placeholder="example@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <Text className="text-[#093030] mb-2 mt-3.5">Mobile Number</Text>
              <InputField
                Icon={DevicePhoneMobileIcon}
                placeholder="+243 910 000 345"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                keyboardType="phone-pad"
              />

              <Text className="text-[#093030] mb-2 mt-3.5">
                Username Or Date of Birth
              </Text>
              <InputField
                Icon={CalendarIcon} // Ou une icône User si c'est pour un nom d'utilisateur
                placeholder="dd/mm/yyyy"
                value={usernameOrDob}
                onChangeText={setUsernameOrDob}
              />

              <Text className="text-[#093030] mb-2 mt-3.5">Password</Text>
              <InputField
                Icon={LockClosedIcon}
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <Text className="text-[#093030] mb-2 mt-3.5">
                Confirm Password
              </Text>
              <InputField
                Icon={LockClosedIcon}
                placeholder="********"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {/* Bouton Sign Up */}
            <Pressable
              className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center mb-4"
              onPress={handleRegister}
            >
              <Text
                // className="text-white"
                style={{ fontFamily: "PoppinsBold", fontSize: 15, color: "#FFFFFF" }}
              >
                Sign Up
              </Text>
            </Pressable>

            {/* Lien Already have an account? Log In */}
            <View className="flex-row justify-center mt-2 mb-2">
              <Text className="text-gray-500">Already have an account?</Text>
              <TouchableOpacity onPress={handleLoginPress}>
                <Text className="text-[#0088FF] font-semibold ml-1">
                  Log In
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
