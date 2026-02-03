import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
    }}
    >
        <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}/>

        <Tabs.Screen 
        name="create"
        options={{
          title: "Criar",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          )
        }}/>

    </Tabs>
  )
}