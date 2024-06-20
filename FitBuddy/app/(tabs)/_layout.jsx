import React from 'react'

import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2 mt-3">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-7 h-7"
        />
        <Text
          className={`${focused ? "font-msemibold" : "font-mregular"} text-xxs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };
  

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
        tabBarActiveTintColor: "#FF650F",
        tabBarInactiveTintColor: "#8F8F8F",
        tabBarShowLabel: false,
        tabBarStyle: {
        backgroundColor: "#FFF",
        borderTopWidth: 2,
        borderTopColor: "#DEE2E6",
        height: 100,
        },
        }}>

        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.house}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="treino"
          options={{
            title: "Treino",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.dumbbell}
                color={color}
                name="Treino"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="descobrir"
          options={{
            title: "Descobrir",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.compass}
                color={color}
                name="Descobrir"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.user}
                color={color}
                name="Perfil"
                focused={focused}
              />
            ),
          }}
        />


    </Tabs>
    </>
  )
}

export default TabsLayout