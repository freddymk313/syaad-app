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
  Image,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// ---------------- TYPES ----------------
type RootStackParamList = {
  SecurityPin: undefined;
  Login: undefined;
  SignUp: undefined;
};

type SecurityPinScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SecurityPin"
>;

// ---------------- CONSTANTES ----------------
const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.28;
const PIN_LENGTH = 6;

// ---------------- COMPONENT ----------------
export default function SecurityPinScreen({
  navigation,
}: SecurityPinScreenProps) {
  const [pin, setPin] = useState<string[]>(Array(PIN_LENGTH).fill(""));
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const router = useRouter();

  // Auto focus premier champ
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Gestion saisie
  const handlePinChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < PIN_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Gestion backspace
  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Bouton Accept
  const handleAcceptPress = () => {
    const fullPin = pin.join("");
    if (fullPin.length === PIN_LENGTH) {
      console.log("PIN Accepted:", fullPin);
      router.navigate("/(auth)/new-password");
    }
  };

  const handleSendAgainPress = () => {
    console.log("Send Again pressed");
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
            <Text
              style={{
                fontFamily: "PoppinsBold",
                fontSize: 30,
                color: "#FFFFFF",
                fontWeight: "semibold",
              }}
            >
              Security Pin
            </Text>
          </View>

          {/* CARD */}
          <ScrollView
            className="bg-white rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View className="flex-1 items-center">
              {/* TITRE */}
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 48,
                  marginTop: 48,
                  color: "#0E3E3E",
                }}
                // className="text-2xl text-[#093030] mt-12 mb-10"
                // className="text-2xl font-bold text-[#0E3E3E] mt-4 mb-2"
              >
                Enter Security Pin
              </Text>

              {/* PIN INPUTS */}
              <View
                className="flex-row justify-between w-full *max-w-75 space-x-2 px-6 mb-12"
                // style={{ maxWidth: 300 }}
              >
                {pin.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(text) => handlePinChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      borderWidth: 2,
                      textAlign: "center",
                      fontSize: 18,
                      fontFamily: "PoppinsSemiBold",
                      borderColor: pin[index] !== "" ? "#0088FF" : "#E0E0E0",
                      backgroundColor:
                        pin[index] !== "" ? "#E0E0E0" : "#FFFFFF",
                    }}
                  />
                ))}
              </View>

              {/* ACCEPT BUTTON */}
              <Pressable
                className="bg-[#0088FF] py-4 w-[60%] rounded-full items-center justify-center mb-4"
                onPress={handleAcceptPress}
                disabled={pin.join("").length !== PIN_LENGTH}
              >
                <Text
                  style={{ fontFamily: "PoppinsBold", color: "#FFFFFF", fontSize: 15 }}
                  // className="text-white text-[15px]"
                >
                  Accept
                </Text>
              </Pressable>

              {/* SEND AGAIN */}
              <TouchableOpacity
                onPress={handleSendAgainPress}
                className="mb-16"
              >
                <Text className="text-[#0088FF] text-base mt-4 font-semibold">
                  Send Again
                </Text>
              </TouchableOpacity>

              {/* SOCIAL */}
              <Text className="text-[#093030] text-xs mb-3">
                Or sign up with
              </Text>

              <View className="flex-row gap-6 mb-4">
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
              </View>

              {/* SIGN UP */}
              <View className="flex-row mt-4">
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
