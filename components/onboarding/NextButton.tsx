import { Text, Pressable } from "react-native";
import React from "react";

export default function NextButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-[#0088FF] py-4 rounded-full items-center justify-center w-full"
    >
      <Text
        // className="text-white"
        style={{ fontFamily: "PoppinsBold", fontSize: 15, color: "#FFFFFF" }}
      >
        Next
      </Text>
    </Pressable>
  );
}
