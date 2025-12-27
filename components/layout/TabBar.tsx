import React from "react";
import { StyleSheet, View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";

import HomeIcon from "@/assets/icons/home.svg";
import SearchIcon from "@/assets/icons/search.svg";
import TransferIcon from "@/assets/icons/transaction.svg";
import CategoryIcon from "@/assets/icons/category.svg";
import ProfileIcon from "@/assets/icons/account.svg";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const primaryColor = "#1880F1"; 
  const inactiveColor = "#052224"; 
  const tabBgColor = "#DFEFF8"; 

  const icons: Record<
    string,
    { render: (props: any) => React.ReactElement; size: number }
  > = {
    home: {
      // On passe la couleur à "color" pour que "currentColor" dans le SVG fonctionne
      render: (props) => <HomeIcon width={props.size} height={props.size} color={props.color} fill="none" />,
      size: 24,
    },
    search: {
      render: (props) => <SearchIcon width={props.size} height={props.size} color={props.color} fill="none" />,
      size: 24,
    },
    transfert: {
      render: (props) => <TransferIcon width={props.size} height={props.size} color={props.color} fill="none" />,
      size: 28,
    },
    category: {
      render: (props) => <CategoryIcon width={props.size} height={props.size} color={props.color} fill="none" />,
      size: 24,
    },
    profile: {
      render: (props) => <ProfileIcon width={props.size} height={props.size} color={props.color} fill="none" />,
      size: 24,
    },
  };

  return (
    <View style={styles.tabBarContainer}>
      <View style={[styles.mainWrapper, { backgroundColor: tabBgColor }]}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

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

          const key = (route.name ?? "").toLowerCase();
          const IconObj = icons[key];
          if (!IconObj) return null;

          const { render: Icon, size } = IconObj;
          const activeColor = isFocused ? "#FFFFFF" : inactiveColor;

          return (
            <PlatformPressable
              key={route.key} 
              onPress={onPress} // Décommenté pour activer la navigation
              style={styles.tabItem}
              android_ripple={{ color: 'transparent' }}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isFocused && { backgroundColor: primaryColor },
                ]}
              >
                <Icon size={size} color={activeColor} />
              </View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  mainWrapper: {
    flexDirection: "row",
    width: "100%",
    height: 95, 
    paddingHorizontal: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 60,
    height: 55,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default TabBar;