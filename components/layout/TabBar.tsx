import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeIcon from "@/assets/icons/home.svg";
import AccountIcon from "@/assets/icons/account.svg";
import CategoryIcon from "@/assets/icons/category.svg";
import TransactionIcon from "@/assets/icons/transaction.svg";
import SearchIcon from "@/assets/icons/search.svg";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const icons: Record<string, (props: any) => React.ReactElement | null> = {
    home: (props: any) => <Feather name="home" {...props} />,
    search: (props: any) => <Feather name="search" {...props} />,
    transfert: (props: any) => <FontAwesome5 name="exchange-alt" {...props} />,
    settings: (props: any) => <Ionicons name="settings-sharp" {...props} />,
    profile: (props: any) => <Feather name="user" {...props} />,
    // home: (props: any) => <HomeIcon width={props.size} height={props.size} fill={props.color} />,
    // search: (props: any) => <SearchIcon width={props.size} height={props.size} fill={props.color} />,
    // transfert: (props: any) => <TransactionIcon width={props.size} height={props.size} fill={props.color} />,
    // settings: (props: any) => <CategoryIcon width={props.size} height={props.size} fill={props.color} />,
    // profile: (props: any) => <AccountIcon width={props.size} height={props.size} fill={props.color} />,
  };

  const routeKeyMap: Record<string, string> = {
    home: "home",
    search: "search",
    transfert: "transfert",
    settings: "settings",
    profile: "profile", // même si la route devient profile/index
  };

  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const primaryColor = colors?.primary ?? "#0088FF";
  const grayColor = "#052224";

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
      }}
    >
      <View className="flex-row w-full h-27 px-6 bg-[#DFEFF8] rounded-t-[70px]">
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

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

          const key = (route.name ?? "").toLowerCase();
          const Icon = icons[key];

          if (!Icon) {
            console.warn(
              `No icon found for route "${route.name}" (normalized "${key}")`
            );
          }
          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              android_ripple={{ color: "transparent" }}
              key={route.key}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isFocused && { backgroundColor: primaryColor },
                ]}
              >
                {Icon?.({ size: 24, color: isFocused ? "#FFFFFF" : grayColor })}
              </View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 54,
    backgroundColor: "#DFEFF8",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  tabBar: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  iconWrapper: {
    width: 54,
    height: 51,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default TabBar;
