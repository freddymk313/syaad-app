import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

// Icônes
import Ionicons from "@expo/vector-icons/Ionicons";
import { 
  BanknotesIcon, 
  ShoppingBagIcon, 
  KeyIcon,
  TruckIcon // Pour simuler l'icône véhicule
} from "react-native-heroicons/outline";

const { height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.45;
const CARD_OVERLAP = 60;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER GRADIENT AVEC STATISTIQUES */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        locations={[0.01, 0.45]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: HEADER_HEIGHT, paddingHorizontal: 25, paddingTop: 60 }}
      >
        {/* Top Header: Welcome & Notif */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-white text-xl font-bold">Hi, Welcome Back</Text>
            <Text className="text-blue-100 text-sm">Good Morning</Text>
          </View>
          <Pressable className="bg-white/20 p-2.5 rounded-full border border-white/30">
            <Ionicons name="notifications-outline" size={22} color="white" />
          </Pressable>
        </View>

        {/* Balance & Expense Row */}
        <View className="flex-row justify-between items-end mb-8">
          <View>
            <View className="flex-row items-center mb-1">
              <Ionicons name="wallet-outline" size={14} color="rgba(255,255,255,0.7)" />
              <Text className="text-white/70 text-xs ml-1 font-semibold uppercase">Total Balance</Text>
            </View>
            <Text className="text-white text-3xl font-bold">$7,783.00</Text>
          </View>
          <View className="items-end">
            <View className="flex-row items-center mb-1">
              <Ionicons name="trending-down" size={14} color="rgba(255,255,255,0.7)" />
              <Text className="text-white/70 text-xs ml-1 font-semibold uppercase">Total Expense</Text>
            </View>
            <Text className="text-white text-3xl font-bold">-$1,187.40</Text>
          </View>
        </View>

        {/* Progress Bar Section */}
        <View className="w-full">
          <View className="flex-row justify-between items-center mb-2">
             <Text className="text-white font-bold text-xs bg-black/20 px-2 py-0.5 rounded">30%</Text>
             <Text className="text-white font-bold text-xs">$20,000.00</Text>
          </View>
          <View className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
            <View style={{ width: '30%' }} className="h-full bg-white rounded-full" />
          </View>
          <View className="flex-row items-center mt-3">
            <Ionicons name="checkmark-circle" size={16} color="white" />
            <Text className="text-white/90 text-[11px] ml-2 font-medium">
              30% Of Your Expenses, Looks Good.
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* 2. CARTE BLANCHE SUPERPOSÉE (Scrollable) */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: -CARD_OVERLAP,
          zIndex: 10,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 25,
            paddingTop: 35,
            paddingBottom: 100,
          }}
        >
          {/* Summary Box (Bleue avec l'icône voiture) */}
          <View className="bg-[#0088FF] rounded-[30px] p-5 flex-row items-center mb-8 shadow-xl shadow-blue-300">
            <View className="bg-white/20 p-4 rounded-full border border-white/20">
               <TruckIcon size={32} color="white" />
            </View>
            <View className="flex-1 ml-5 border-l border-white/20 pl-5">
               <View className="mb-4">
                  <View className="flex-row items-center mb-1">
                    <Ionicons name="cash-outline" size={12} color="rgba(255,255,255,0.7)" />
                    <Text className="text-white/70 text-[10px] uppercase font-bold ml-1">Revenue Last Week</Text>
                  </View>
                  <Text className="text-white text-lg font-bold">$4,000.00</Text>
               </View>
               <View>
                  <View className="flex-row items-center mb-1">
                    <Ionicons name="restaurant-outline" size={12} color="rgba(255,255,255,0.7)" />
                    <Text className="text-white/70 text-[10px] uppercase font-bold ml-1">Food Last Week</Text>
                  </View>
                  <Text className="text-white text-lg font-bold">-$100.00</Text>
               </View>
            </View>
          </View>

          {/* Filter Tabs (Daily, Weekly, Monthly) */}
          <View className="flex-row bg-[#F2F7FB] p-1.5 rounded-2xl mb-8">
            <TabButton title="Daily" active={false} />
            <TabButton title="Weekly" active={false} />
            <TabButton title="Monthly" active={true} />
          </View>

          {/* Transactions List */}
          <TransactionItem 
            icon={<BanknotesIcon color="white" size={24} />} 
            title="Salary" 
            subtitle="18:27 - April 30" 
            category="Monthly" 
            amount="$4,000.00" 
            isPositive={true} 
          />
          <TransactionItem 
            icon={<ShoppingBagIcon color="white" size={24} />} 
            title="Groceries" 
            subtitle="17:00 - April 24" 
            category="Pantry" 
            amount="-$100.00" 
            isPositive={false} 
          />
          <TransactionItem 
            icon={<KeyIcon color="white" size={24} />} 
            title="Rent" 
            subtitle="8:30 - April 15" 
            category="Rent" 
            amount="-$674.40" 
            isPositive={false} 
          />
        </ScrollView>
      </View>

      {/* 3. NAVIGATION BAR (MOCK) */}
      <View className="absolute bottom-0 w-full bg-white/90 border-t border-gray-100 flex-row justify-around py-4 pb-8 px-4">
         <Ionicons name="home" size={26} color="#0088FF" />
         <Ionicons name="bar-chart-outline" size={26} color="#94A3B8" />
         <Ionicons name="swap-horizontal-outline" size={26} color="#94A3B8" />
         <Ionicons name="layers-outline" size={26} color="#94A3B8" />
         <View className="w-8 h-8 rounded-full bg-[#0088FF] items-center justify-center">
            <Ionicons name="person" size={18} color="white" />
         </View>
      </View>
    </View>
  );
}

// --- SOUS-COMPOSANTS POUR LA PROPRETÉ DU CODE ---

const TabButton = ({ title, active }: { title: string; active: boolean }) => (
  <Pressable className={`flex-1 py-3 rounded-xl items-center ${active ? 'bg-[#0088FF]' : ''}`}>
    <Text className={`font-bold text-sm ${active ? 'text-white' : 'text-gray-400'}`}>
      {title}
    </Text>
  </Pressable>
);

const TransactionItem = ({ icon, title, subtitle, category, amount, isPositive }: any) => (
  <View className="flex-row items-center mb-6">
    <View className="w-12 h-12 bg-[#0088FF] rounded-2xl items-center justify-center mr-4 shadow-sm">
      {icon}
    </View>
    <View className="flex-1">
      <Text className="text-[#093030] font-bold text-base leading-5">{title}</Text>
      <Text className="text-gray-400 text-[11px]">{subtitle}</Text>
    </View>
    <Text className="text-gray-400 text-xs mr-4 font-medium">{category}</Text>
    <Text className={`font-bold text-base ${isPositive ? 'text-[#093030]' : 'text-[#0088FF]'}`}>
      {amount}
    </Text>
  </View>
);