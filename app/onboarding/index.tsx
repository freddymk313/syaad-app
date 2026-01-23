import { View, FlatList, Animated } from "react-native";
// import slides from "@/constants/slides-onboarding";
import OnboardingItem from "@/components/onboarding/OnboardingItem";
import { useRef, useState } from "react";
import Paginator from "@/components/onboarding/Paginator";
import NextButton from "@/components/onboarding/NextButton";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

export default function OnboardingIndex() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<any>>(null);
  const router = useRouter();
  const { t } = useTranslation();

  const slides = [
    { id: "1", title: t("slides.0.title"), image: require("../assets/onbording-img/1.png") },
    { id: "2", title: t("slides.1.title"), image: require("../assets/onbording-img/2.png") },
    { id: "3", title: t("slides.2.title"), image: require("../assets/onbording-img/3.png") },
    { id: "4", title: t("slides.3.title"), image: require("../assets/onbording-img/4.png") },
  ];

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/launch");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* SLIDES */}
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      {/* PAGINATOR + NEXT BUTTON */}
      <View
        style={{
          position: "absolute",
          bottom: 140,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "60%", paddingHorizontal: 30 }}>
          <NextButton onPress={scrollToNext} />
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 50, width: "100%" }}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </View>
  );
}
