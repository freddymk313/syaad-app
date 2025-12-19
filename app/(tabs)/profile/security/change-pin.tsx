import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.25;
const CARD_OVERLAP = 60;

export default function ChangePinScreen() {
  const router = useRouter();

  // États pour les PINs et la visibilité
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Composant interne pour les champs de saisie PIN
  const PinInputField = ({
    label,
    value,
    onChange,
    isVisible,
    toggleVisible,
  }: {
    label: string;
    value: string;
    onChange: (text: string) => void;
    isVisible: boolean;
    toggleVisible: () => void;
  }) => (
    <View className="mb-6">
      <Text className="text-[#093030] text-base font-semibold mb-2 ml-1">
        {label}
      </Text>
      <View className="flex-row items-center bg-[#DFEFF8] rounded-2xl px-5 py-4">
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={!isVisible}
          placeholder="● ● ● ●"
          placeholderTextColor="#A0A0A0"
          keyboardType="numeric"
          maxLength={4}
          className="flex-1 text-[#093030] font-medium text-lg placeholder:text-sm"
        />
        <Pressable onPress={toggleVisible}>
          <Feather
            name={isVisible ? "eye" : "eye-off"}
            size={20}
            color="#093030"
          />
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 1. HEADER BLEU GRADIENT */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
      >
        <View className="flex-row items-center justify-between px-6 pt-15 ios:pt-20">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-xl font-bold">Change Pin</Text>

          <Pressable className="bg-[#DFEFF8] p-1 rounded-full">
            <Ionicons name="notifications-outline" size={20} color="#093030" />
          </Pressable>
        </View>
      </LinearGradient>

      {/* 2. CARD BLANCHE */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
        }}
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 30,
          paddingBottom: 40,
        }}
      >
        {/* FORMULAIRE */}
        <View>
          <PinInputField
            label="Current Pin"
            value={currentPin}
            onChange={setCurrentPin}
            isVisible={showCurrent}
            toggleVisible={() => setShowCurrent(!showCurrent)}
          />

          <PinInputField
            label="New Pin"
            value={newPin}
            onChange={setNewPin}
            isVisible={showNew}
            toggleVisible={() => setShowNew(!showNew)}
          />

          <PinInputField
            label="Confirm Pin"
            value={confirmPin}
            onChange={setConfirmPin}
            isVisible={showConfirm}
            toggleVisible={() => setShowConfirm(!showConfirm)}
          />
        </View>

        {/* BOUTON D'ACTION */}
        <View className="mt-10">
          <Pressable
            className="bg-[#0088FF] py-4 w-[60%] self-center rounded-full items-center justify-center"
            onPress={() => console.log("Profile Updated")}
          >
            <Text
              // className="text-white"
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: 15,
                color: "#FFFFFF",
              }}
            >
              Change Pin
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
