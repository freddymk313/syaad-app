import { Tabs } from 'expo-router';
import React from 'react';
import { 
  HomeIcon, 
  ArrowPathIcon, // Pour le transfert/transaction
  Cog6ToothIcon, // Icône par défaut pour un autre onglet
  UserIcon, // Pour le profil
} from 'react-native-heroicons/outline';
import { View } from 'react-native';

const TabBarIcon = ({ Icon, focused }: {Icon: any, focused: any}) => {
    // Si l'onglet est actif, l'icône est bleue, sinon elle est grise.
    const color = focused ? '#0088FF' : '#A0A0A0'; 
    return (
        <View style={{ paddingTop: 8, paddingBottom: 4 }}>
            <Icon color={color} size={24} />
        </View>
    );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0088FF', // Couleur bleue pour l'onglet actif
        tabBarInactiveTintColor: '#A0A0A0', // Couleur grise pour l'onglet inactif
        tabBarStyle: {
          height: 60, // Hauteur personnalisée pour les onglets
          paddingBottom: 5,
        },
        headerShown: false, // Cache l'en-tête natif par défaut
      }}
    >
      {/* Premier onglet (exemple: Home) */}
      <Tabs.Screen
        name="home" // Doit correspondre au nom du fichier/dossier de l'écran
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={HomeIcon} focused={focused} />
          ),
        }}
      />

      {/* Deuxième onglet (exemple: Transactions/Transferts) */}
      <Tabs.Screen
        name="transfert" // Nom de fichier/dossier
        options={{
          title: 'Transfer',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={ArrowPathIcon} focused={focused} />
          ),
        }}
      />
      
      {/* Troisième onglet (exemple: Settings ou autres) */}
      <Tabs.Screen
        name="settings" // Nom de fichier/dossier
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={Cog6ToothIcon} focused={focused} />
          ),
        }}
      />

      {/* Quatrième onglet : PROFIL */}
      <Tabs.Screen
        name="profile" // Nom du fichier/dossier 'profile.tsx'
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={UserIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}