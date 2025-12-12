import { View, Animated, useWindowDimensions } from "react-native";
import React from "react";

export default function Paginator({ data, scrollX }: any) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64, justifyContent: "center" }}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 18, 9],
        //   extrapolate: "clamp"
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
        //   extrapolate: "clamp"
        });

        return (
          <Animated.View
            key={i.toString()}
            style={{
              height: 8,
              width: dotWidth,
              borderRadius: 4,
              backgroundColor: "white",
              marginHorizontal: 6,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
}
