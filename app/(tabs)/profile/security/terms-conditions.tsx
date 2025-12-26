import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// Icônes
import Ionicons from "@expo/vector-icons/Ionicons";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.23;
const CARD_OVERLAP = 60;

export default function TermsConditionsScreen() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER GRADIENT */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()} className="p-1">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-bold">Terms And Conditions</Text>

          <Pressable className="bg-[#DFEFF8] p-1.5 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARTE BLANCHE CONTENANT LE TEXTE */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
          paddingTop: 40,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 28,
            paddingBottom: 40,
          }}
        >
          {/* TITRE PRINCIPAL */}
          <Text className="text-[#093030] text-xl font-bold mb-4">
            Est Fugiat Assumenda Aut Reprehenderit
          </Text>

          {/* CORPS DU TEXTE (SIMULATION DU CONTENU FIGMA) */}
          <Text className="text-gray-500 text-sm leading-6 mb-4 text-justify">
            Lorem ipsum dolor sit amet. Et odio officia aut voluptate internos est omnis vitae ut architecto sunt non tenetur fuga ut provident vero. Quo aspernatur facere et consectetur ipsum et facere corrupti est asperiores facere. Est fugiat assumenda aut reprehenderit voluptatem sed.
          </Text>

          {/* LISTE NUMÉROTÉE */}
          <View className="mb-4">
            {[
              "Ea voluptates omnis aut sequi sequi.",
              "Est dolore quae in aliquid ducimus et autem repellendus.",
              "Aut ipsum Quis qui porro quasi aut minus placeat!",
              "Sit consequatur neque ab vitae facere.",
            ].map((item, index) => (
              <Text key={index} className="text-gray-500 text-sm leading-6 mb-1">
                {index + 1}. {item}
              </Text>
            ))}
          </View>

          <Text className="text-gray-500 text-sm leading-6 mb-4 text-justify">
            Aut quidem accusantium nam alias autem eum officiis placeat et omnis autem id officiis perspiciatis qui corrupti officia eum aliquam provident. Eum voluptas error et optio dolorum cum molestiae nobis et odit molestiae quo magnam impedit sed fugiat nihil non voluptas qui neque repellat.
          </Text>

          {/* LISTE À PUCES */}
          <View className="mb-6 pl-2">
            <Text className="text-gray-500 text-sm leading-6">• Aut fuga sequi eum voluptatibus provident.</Text>
            <Text className="text-gray-500 text-sm leading-6">• Eos consequuntur voluptas vel amet eaque aut dignissimos velit.</Text>
          </View>

          {/* LIEN EXTERNE */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm">Read the terms and conditions in more detail at</Text>
            <Pressable>
              <Text className="text-[#0088FF] text-sm font-bold underline">www.finwiseapp.de</Text>
            </Pressable>
          </View>

          {/* CHECKBOX D'ACCEPTATION */}
          <Pressable 
            onPress={() => setAccepted(!accepted)}
            className="flex-row items-center mb-8"
          >
            <View className={`w-6 h-6 rounded border-2 items-center justify-center mr-3 ${accepted ? 'bg-[#0088FF] border-[#0088FF]' : 'border-gray-300'}`}>
              {accepted && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
            <Text className="text-[#093030] text-sm font-semibold">
              I accept all the terms and conditions
            </Text>
          </Pressable>

          {/* BOUTON ACCEPT */}
          <Pressable
            disabled={!accepted}
            onPress={() => router.back()}
            className={`py-4 rounded-full items-center shadow-md ${accepted ? 'bg-[#0088FF]' : 'bg-gray-300'}`}
          >
            <Text className="text-white text-lg font-bold">Accept</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}