import { PlatformPressable, Text } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const colors = useTheme().colors;
  const { buildHref } = useLinkBuilder();

  return (
    <View className="flex-row w-full h-27 bg-[#DFEFF8] rounded-[70px]">
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // console.log("Route: ", route.name, "isFocused:", isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
});

export default TabBar;
