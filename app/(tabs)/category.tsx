import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import HomeIcon from "@/assets/icons/home.svg";
import AccountIcon from "@/assets/icons/account.svg";

export default function settings() {
  return (
    <View className="flex-1 items-center justify-center h-full bg-[#FFFFFF]">
      <Text>settings</Text>

      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
        <Path d="M12 2L2 7v10l10 5 10-5V7z" fill="black" />
      </Svg>

      <HomeIcon width={54} height={54} 
      fill="#FFE600" 
      stroke="#FFE600" />

      <AccountIcon width={24} height={24} fill="#FF0000" />

       <Svg viewBox="0 0 24 24" width={24} height={24}>
         <AccountIcon width={24} height={24} fill="#FF0000" />
       </Svg>
    </View>
  );
}
