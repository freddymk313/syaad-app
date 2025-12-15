import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  PencilSquareIcon,   // Edit Profile
  ShieldCheckIcon,    // Security
  Cog8ToothIcon,      // Setting
  QuestionMarkCircleIcon, // Help
  ArrowLeftOnRectangleIcon, // Logout
} from "react-native-heroicons/outline";

// ---------------- CONSTANTES ----------------
const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.35; // Augmenté pour le profil et l'image
const PROFILE_IMAGE_SIZE = 90;

// ---------------- Composant d'Élément de Menu ----------------
interface MenuItemProps {
  Icon: React.FC<any>;
  title: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, title, onPress }) => (
  <TouchableOpacity 
    className="flex-row items-center py-4 border-b border-gray-100" 
    // onPress={onPress}
  >
    <Icon color="#0088FF" size={24} className="mr-4" />
    <Text className="text-[#0E3E3E] text-base font-medium flex-1">{title}</Text>
    <Text className="text-gray-400 text-sm"> &gt; </Text> {/* Simuler une flèche */}
  </TouchableOpacity>
);

// ---------------- Écran de Profil ----------------
export default function ProfileScreen() {
  const router = useRouter();

  const handleEditProfile = () => {
    // router.navigate("/(tabs)/profile/edit"); // Exemple de navigation
  };
  const handleSecurity = () => {
    // router.navigate("/(tabs)/profile/security"); // Exemple de navigation
  };
  // ... autres fonctions de navigation

  const handleLogout = () => {
    console.log("Logout initiated");
    // Logique de déconnexion et redirection vers l'écran de connexion
    router.replace("/(auth)/login"); 
  };

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT }}
        className="flex justify-end items-center pb-10"
      >
        <Text className="text-2xl font-semibold text-[#FFFFFF] mb-3">
          Profile
        </Text>
      </LinearGradient>

      {/* Carte blanche du Profil */}
      <ScrollView
        className="absolute w-full bg-[#FFFFFF] rounded-t-[40px] px-6 pt-16 flex-1 shadow-xl"
        style={{ top: HEADER_HEIGHT - 60 }} // Positionnement pour chevaucher
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-6">
          {/* Image de profil et Infos */}
          <Text className="text-[#0E3E3E] text-xl font-bold mt-2">
            John Smith
          </Text>
          <Text className="text-gray-500 text-sm">ID: 25838824</Text>
        </View>

        {/* Menu Items */}
        <View className="w-full mt-4">
          <MenuItem 
            Icon={PencilSquareIcon} 
            title="Edit Profile" 
            onPress={handleEditProfile} 
          />
          <MenuItem 
            Icon={ShieldCheckIcon} 
            title="Security" 
            onPress={handleSecurity} 
          />
          <MenuItem 
            Icon={Cog8ToothIcon} 
            title="Setting" 
            onPress={() => console.log("Settings")} 
          />
          <MenuItem 
            Icon={QuestionMarkCircleIcon} 
            title="Help" 
            onPress={() => console.log("Help")} 
          />
          
          {/* Logout (bouton spécial, souvent rouge ou en bas) */}
          <TouchableOpacity 
            className="flex-row items-center py-4 mt-4" 
            onPress={handleLogout}
          >
            <ArrowLeftOnRectangleIcon color="#FF0000" size={24} className="mr-4" />
            <Text className="text-[#FF0000] text-base font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
        
        {/* Espace pour ne pas cacher le bas du ScrollView par le TabBar */}
        <View style={{ height: 100 }} /> 
      </ScrollView>
      
      {/* Image de profil (absolue, centrée sur la superposition) */}
      <View
        className="absolute self-center border-4 border-white rounded-full"
        style={{ 
          top: HEADER_HEIGHT - PROFILE_IMAGE_SIZE / 2,
          width: PROFILE_IMAGE_SIZE,
          height: PROFILE_IMAGE_SIZE,
          zIndex: 10,
        }}
      >
        {/* Placeholder pour l'image de profil */}
        <Image
          source={require("@/assets/images/profile.png")} // Remplacez par votre chemin d'image
          className="w-full h-full rounded-full"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}