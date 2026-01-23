import InputField from "@/components/form/InputField";
import i18n  from "@/i18n";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FingerPrintIcon,
  LockClosedIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { SvgProps } from "react-native-svg";

import { login } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { Alert } from "react-native";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

interface InputFieldProps {
  Icon: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.25;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();
  const { loginSuccess } = useAuthStore();

  const handleSignUpPress = () => {
    router.navigate("/(auth)/register");
  };

  const handleLogin = async () => {
    try {
      const response = await login({
        email,
        password,
      });

      if (response.success) {
        await loginSuccess(response.data);
        router.replace("/(tabs)/home");
      }
    } catch (error: any) {
      Alert.alert(
        "Erreur de connexion",
        error?.response?.data?.message || "Identifiants incorrects",
      );
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]} // 1% pour #0088FF, 45% pour #005299
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View
          className="flex-1"
          // showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Header */}
          <View
            // className="flex justify-center items-center border-2 border-red-500"
            // style={{ height: HEADER_HEIGHT, paddingTop: 40 }}
            style={{
              height: HEADER_HEIGHT,
              paddingTop: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-3xl font-semibold text-[#FFFFFF]">
              {/* Welcome */}
              {i18n.t("welcome")}
            </Text>
          </View>

          {/* Card */}
          <ScrollView
            className="bg-[#FFFFFF] rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            // style={{ marginTop: -20, minHeight: height - HEADER_HEIGHT + 20 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              {
                // paddingHorizontal: 25,
                // backgroundColor: "#FFFFFF",
                // paddingVertical: 32,
                // paddingBottom: 40,
                // borderTopStartRadius: 60,
                // borderTopEndRadius: 60
              }
            }
          >
            {/* Champs de saisie */}
            <View className="mb-5 mt-6">
              <Text className="text-[#093030] mb-2">Username Or Email</Text>
              <InputField
                Icon={UserIcon}
                placeholder="example@example.com"
                value={email}
                onChangeText={setEmail}
              />

              <Text className="text-[#093030] mb-2 mt-3.5">Password</Text>
              <InputField
                Icon={LockClosedIcon}
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Log In */}
            <Pressable
              className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center"
              onPress={() => router.navigate("/(tabs)/home")}
              // onPress={handleLogin}
            >
              <Text
                // className="text-white"
                style={{
                  fontFamily: "PoppinsBold",
                  fontSize: 15,
                  color: "#FFFFFF",
                }}
              >
                Log In
              </Text>
            </Pressable>

            {/* Forgot Password */}
            <TouchableOpacity
              className="self-center my-6"
              onPress={() => router.navigate("/(auth)/forgotpassword")}
            >
              <Text className="text-sm text-[#093030] font-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Sign Up */}
            <Pressable
              className="bg-[#DFEFF8] py-4 w-[60%] self-center rounded-full items-center justify-center *border border-[#0088FF]"
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

            {/* Fingerprint */}
            <TouchableOpacity
              className="flex-row items-center justify-center gap-1 mt-6"
              onPress={() => router.navigate("/(auth)/security-fingerprint")}
            >
              <FingerPrintIcon width={24} height={24} color="#0088FF" />
              <Text className="text-sm text-gray-600">
                Use Fingerprint To Access
              </Text>
            </TouchableOpacity>

            {/* google and facebook sign in */}
            <View className="flex justify-center mt-4 gap-3">
              <Text className="text-[#093030] text-center text-xs">
                Or sign in with
              </Text>

              <View className="flex-row justify-center gap-6">
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
            </View>

            {/* Don't have account */}
            <View className="flex-row justify-center mt-4">
              <Text className="text-gray-500">Don't have an account?</Text>
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text className="text-[#0088FF] font-semibold ml-1">
                  Sign Up
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
