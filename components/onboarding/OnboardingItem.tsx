import { View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";

export default function OnboardingItem({ item }: { item: any }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ width, flex: 1, paddingTop: 115 }}>

      {/* Texte en haut */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{ 
            fontSize: 30,
            fontFamily: "PoppinsSemiBold",
            textAlign: "center",
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
      </View>

      {/* Image full width en bas */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        // className="border border-blue-500"
      >
        <Image
          source={item.image}
          style={{
            width: width,          
            height: height * 0.7, 
            resizeMode: "cover", 
          }}
        />
      </View>

    </View>
  );
}
