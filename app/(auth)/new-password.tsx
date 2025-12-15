import InputField from "@/components/form/InputField";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";
import { LockClosedIcon } from "react-native-heroicons/outline"; // Pour l'icône de mot de passe
import { SvgProps } from "react-native-svg";

// Importez votre composant InputField si disponible. 
// Je vais supposer son existence et sa structure.
// import InputField from "@/components/InputField"; 

// ---------------- TYPES ET CONSTANTES ----------------
type RootStackParamList = {
  NewPassword: undefined;
  SuccessScreen: undefined; // Écran de succès après le changement
  SignUp: undefined;
};

type NewPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NewPassword"
>;

// Simulation de l'interface InputFieldProps (si vous utilisez un composant InputField)
interface InputFieldProps {
  Icon: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28;

// ---------------- COMPONENT ----------------
export default function NewPasswordScreen({
  navigation,
}: NewPasswordScreenProps) {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleChangePasswordPress = () => {
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Logique de réinitialisation du mot de passe
    console.log("New Password set successfully.");
    
    // Navigation vers l'écran de succès (3.2 - C - Password Changed Succesfully)
    // J'ai inclus l'écran de succès dans les fichiers joints, il est logique de naviguer vers lui.
    router.navigate("/(auth)/password-changed-success"); 
  };

  const handleSignUpPress = () => {
    router.navigate("/(auth)/register");
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
              New Password
            </Text>
          </View>

          {/* CARD */}
          <ScrollView
            className="bg-white rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingTop: 64 }}
          >
            <View className="flex-1 items-center">
              
              {/* NOUVEAU MOT DE PASSE */}
              <View className="w-full mb-4">
                <Text className="text-[#093030] mb-2 font-semibold">New Password</Text>
                {/* Utilisez votre composant InputField ici */}
                <InputField
                  Icon={LockClosedIcon}
                  placeholder="********"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                />
                {/* <DummyInputField
                  placeholder="********"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                /> */}
              </View>

              {/* CONFIRMER MOT DE PASSE */}
              <View className="w-full mb-6">
                <Text className="text-[#093030] mb-2 font-semibold">Confirm Password</Text>
                {/* Utilisez votre composant InputField ici */}
                <InputField
                  Icon={LockClosedIcon}
                  placeholder="********"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
                {/* <DummyInputField
                  placeholder="********"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                /> */}
              </View>

              {/* CHANGE PASSWORD BUTTON */}
              <Pressable
                className="bg-[#0088FF] py-4 w-full rounded-full items-center justify-center mb-16"
                onPress={handleChangePasswordPress}
                // disabled={!newPassword || newPassword !== confirmPassword || newPassword.length < 6}
              >
                <Text
                  // className="text-white"
                  style={{ fontFamily: "PoppinsBold", fontSize: 16, color: "#FFFFFF" }}
                >
                  Change Password
                </Text>
              </Pressable>

              {/* SOCIAL / SIGN UP section is often omitted on New Password screen, 
                  but included here to match the bottom part of your general screens */}
              {/* <View className="w-full items-center"> */}
                {/* <Text className="text-[#093030] text-center text-xs mb-3">
                  Or sign up with
                </Text> */}

                {/* Icônes sociales */}
                {/* <View className="flex-row justify-center gap-6 mb-4">
                  <TouchableOpacity>
                    <Image
                      source={require("@/assets/logo/facebook.png")}
                      className="w-10 h-10"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={require("@/assets/logo/google.png")}
                      className="w-10 h-10"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View> */}
                
                {/* Lien Don't have an account? Sign Up */}
                {/* <View className="flex-row justify-center mt-4">
                  <Text className="text-gray-500">Don't have an account?</Text>
                  <TouchableOpacity onPress={handleSignUpPress}>
                    <Text className="text-[#0088FF] font-semibold ml-1">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View> */}
              {/* </View> */}

            </View>
          </ScrollView>
        </View>
      </LinearGradient>

      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}