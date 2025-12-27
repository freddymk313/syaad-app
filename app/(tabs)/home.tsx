import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Icônes
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { 
  BanknotesIcon, 
  ShoppingBagIcon, 
  KeyIcon,
  ChevronRightIcon 
} from "react-native-heroicons/outline";

const { height, width } = Dimensions.get("window");

// --- TYPES ---
interface Transaction {
  id: string;
  title: string;
  time: string;
  date: string;
  category: string;
  amount: string;
  isExpense: boolean;
  icon: React.ReactNode;
}

// --- DATA SIMULÉE ---
const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Salary",
    time: "18:27",
    date: "April 30",
    category: "Monthly",
    amount: "$4.000,00",
    isExpense: false,
    icon: <BanknotesIcon size={24} color="white" />,
  },
  {
    id: "2",
    title: "Groceries",
    time: "17:00",
    date: "April 24",
    category: "Pantry",
    amount: "-$100,00",
    isExpense: true,
    icon: <ShoppingBagIcon size={24} color="white" />,
  },
  {
    id: "3",
    title: "Rent",
    time: "8:30",
    date: "April 15",
    category: "Rent",
    amount: "-$674,40",
    isExpense: true,
    icon: <KeyIcon size={24} color="white" />,
  },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      {/* 1. HEADER BLUE GRADIENT */}
      <LinearGradient
        colors={["#0088FF", "#005299"]}
        style={{ height: height * 0.42, paddingHorizontal: 24, paddingTop: 60 }}
      >
        {/* Top Row: Welcome & Notification */}
        <View className="flex-row justify-between items-start mb-8">
          <View>
            <Text className="text-white text-xl font-bold">Hi, Welcome Back</Text>
            <Text className="text-blue-100 text-sm">Good Morning</Text>
          </View>
          <Pressable className="bg-white/20 p-2 rounded-full">
            <Ionicons name="notifications" size={22} color="white" />
          </Pressable>
        </View>

        {/* Balance & Expense Row */}
        <View className="flex-row justify-between mb-8">
          <View>
            <View className="flex-row items-center mb-1">
              <Ionicons name="wallet-outline" size={14} color="white" />
              <Text className="text-white/80 text-xs ml-1">Total Balance</Text>
            </View>
            <Text className="text-white text-2xl font-bold">$7,783.00</Text>
          </View>
          <View className="items-end">
            <View className="flex-row items-center mb-1">
              <Ionicons name="trending-down" size={14} color="white" />
              <Text className="text-white/80 text-xs ml-1">Total Expense</Text>
            </View>
            <Text className="text-white text-2xl font-bold">-$1,187.40</Text>
          </View>
        </View>

        {/* Progress Bar Area */}
        <View>
          <View className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-2">
            <View style={{ width: "30%" }} className="h-full bg-white rounded-full" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-white text-xs font-bold">30%</Text>
            <Text className="text-white text-xs font-bold">$20,000.00</Text>
          </View>
          <View className="flex-row items-center mt-3">
            <Ionicons name="checkmark-circle" size={16} color="white" />
            <Text className="text-white/90 text-xs ml-2">
              30% Of Your Expenses, Looks Good.
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* 2. MAIN WHITE CARD (OVERLAP) */}
      <View 
        style={{ 
          flex: 1, 
          backgroundColor: "white", 
          marginTop: -50, 
          borderTopLeftRadius: 50, 
          borderTopRightRadius: 50,
          paddingTop: 30,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}>
          
          {/* Blue Summary Card */}
          <View className="bg-[#0088FF] rounded-3xl p-5 flex-row items-center mb-8 shadow-lg shadow-blue-400">
            <View className="bg-white/20 p-4 rounded-full border border-orange-400/50">
               <Ionicons name="car-outline" size={32} color="white" />
            </View>
            <View className="flex-1 ml-4 border-l border-white/20 pl-4">
               <View className="mb-3">
                  <Text className="text-white/70 text-[10px] uppercase font-bold">Revenue Last Week</Text>
                  <Text className="text-white text-lg font-bold">$4.000,00</Text>
               </View>
               <View>
                  <Text className="text-white/70 text-[10px] uppercase font-bold">Food Last Week</Text>
                  <Text className="text-white text-lg font-bold">-$100,00</Text>
               </View>
            </View>
          </View>

          {/* Filter Tabs */}
          <View className="flex-row bg-[#F2F7FB] p-1.5 rounded-2xl mb-8">
            {["Daily", "Weekly", "Monthly"].map((tab) => (
              <Pressable 
                key={tab} 
                className={`flex-1 py-3 rounded-xl items-center ${tab === "Monthly" ? "bg-[#0088FF]" : ""}`}
              >
                <Text className={`font-bold ${tab === "Monthly" ? "text-white" : "text-gray-400"}`}>
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Transactions List */}
          {TRANSACTIONS.map((item) => (
            <View key={item.id} className="flex-row items-center mb-6">
              <View className="w-12 h-12 bg-[#0088FF] rounded-xl items-center justify-center mr-4">
                {item.icon}
              </View>
              <View className="flex-1">
                <Text className="text-[#093030] font-bold text-base">{item.title}</Text>
                <Text className="text-gray-400 text-xs">{item.time} - {item.date}</Text>
              </View>
              <View className="items-center mr-6">
                 <Text className="text-gray-400 text-xs">{item.category}</Text>
              </View>
              <Text className={`font-bold text-base ${item.isExpense ? "text-[#0088FF]" : "text-[#093030]"}`}>
                {item.amount}
              </Text>
            </View>
          ))}

        </ScrollView>
      </View>

      {/* 3. BOTTOM TAB BAR (SIMULÉE) */}
      <View className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-gray-100 flex-row justify-around py-4 pb-8">
         <Ionicons name="home" size={26} color="#0088FF" />
         <Ionicons name="stats-chart-outline" size={26} color="#94A3B8" />
         <Ionicons name="swap-horizontal" size={26} color="#94A3B8" />
         <Ionicons name="layers-outline" size={26} color="#94A3B8" />
         <View className="w-7 h-7 rounded-full bg-[#0088FF] items-center justify-center">
            <Ionicons name="person" size={16} color="white" />
         </View>
      </View>
    </View>
  );
}