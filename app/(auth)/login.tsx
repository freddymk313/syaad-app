import InputField from "@/components/form/InputField";
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
  Alert,
} from "react-native";
import {
  FingerPrintIcon,
  LockClosedIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { SvgProps } from "react-native-svg";

import { login } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { useTranslation } from "@/hooks/useTranslation";

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
  const { t } = useTranslation();

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
        t("login.login_error_title"),
        error?.response?.data?.message || t("login.login_error_message")
      );
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1">
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
              {t("login.welcome")}
            </Text>
          </View>

          {/* Card */}
          <ScrollView
            className="bg-[#FFFFFF] rounded-t-[60px] px-8 pt-8 pb-10 flex-1 shadow-2xl"
            showsVerticalScrollIndicator={false}
          >
            {/* Champs de saisie */}
            <View className="mb-5 mt-6">
              <Text className="text-[#093030] mb-2">
                {t("login.username_or_email")}
              </Text>
              <InputField
                Icon={UserIcon}
                placeholder={t("login.username_or_email_placeholder")}
                value={email}
                onChangeText={setEmail}
              />

              <Text className="text-[#093030] mb-2 mt-3.5">
                {t("login.password")}
              </Text>
              <InputField
                Icon={LockClosedIcon}
                placeholder={t("login.password_placeholder")}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Log In */}
            <Pressable
              className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center"
              // onPress={handleLogin}
              onPress={() => router.navigate("/(tabs)/home")}
            >
              <Text
                style={{
                  fontFamily: "PoppinsBold",
                  fontSize: 15,
                  color: "#FFFFFF",
                }}
              >
                {t("login.log_in")}
              </Text>
            </Pressable>

            {/* Forgot Password */}
            <TouchableOpacity
              className="self-center my-6"
              onPress={() => router.navigate("/(auth)/forgotpassword")}
            >
              <Text className="text-sm text-[#093030] font-semibold">
                {t("login.forgot_password")}
              </Text>
            </TouchableOpacity>

            {/* Sign Up */}
            <Pressable
              className="bg-[#DFEFF8] py-4 w-[60%] self-center rounded-full items-center justify-center *border border-[#0088FF]"
              onPress={handleSignUpPress}
            >
              <Text
                style={{
                  fontFamily: "PoppinsBold",
                  fontSize: 15,
                  color: "#0E3E3E",
                }}
              >
                {t("login.sign_up")}
              </Text>
            </Pressable>

            {/* Fingerprint */}
            <TouchableOpacity
              className="flex-row items-center justify-center gap-1 mt-6"
              onPress={() => router.navigate("/(auth)/security-fingerprint")}
            >
              <FingerPrintIcon width={24} height={24} color="#0088FF" />
              <Text className="text-sm text-gray-600">
                {t("login.use_fingerprint")}
              </Text>
            </TouchableOpacity>

            {/* Google and Facebook sign in */}
            <View className="flex justify-center mt-4 gap-3">
              <Text className="text-[#093030] text-center text-xs">
                {t("login.or_sign_in_with")}
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
              <Text className="text-gray-500">{t("login.dont_have_account")}</Text>
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text className="text-[#0088FF] font-semibold ml-1">
                  {t("login.sign_up")}
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
