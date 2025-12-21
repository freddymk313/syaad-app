import { useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

export default function LaunchScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <View className="items-center mb-10">
        <Image
          source={require("@/assets/app/icon-blue.png")}
          className="mb-3 w-32.5 h-43.5"
          resizeMode="cover"
        />
      </View>

      <Text
        className="text-center text-[#4B4544] mb-12 max-w-xs"
        // style={{ fontFamily: "PoppinsRegular", fontSize: 18 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Text>

      <View className="w-full *max-w-xs gap-4">
        <Pressable
          className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center"
          onPress={() => router.navigate("/(auth)/login")}
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 15,
              color: "#FFFFFF",
            }}
          >
            Log In
          </Text>
        </Pressable>

        <Pressable
          className="bg-[#F2F2F7] py-4 w-[60%] self-center rounded-full items-center justify-center *border border-[#0088FF]"
          onPress={() => router.navigate("/(auth)/register")}
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
      </View>

      <Pressable
        className="mt-6"
        onPress={() => router.navigate("/(auth)/forgotpassword")}
      >
        <Text className="text-[#093030] text-sm font-semibold">
          Forgot Password?
        </Text>
      </Pressable>
    </View>
  );
}
