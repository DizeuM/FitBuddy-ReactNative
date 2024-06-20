import { useState } from "react";
import { Image, View, Text } from 'react-native';
import icons from "../constants/icons";

const ActivityCard = ({ endereco, nome, distancia}) => {
  return (
    <View className="rounded-lg border-2 border-gray-200 bg-white px-4 py-3 mb-4 mx-5">
      
      <View className="flex flex-row justify-between text-ellipsis overflow-hidden ">

        <View className="mr-4">
          <Image
              source={icons.map}
              resizeMode="contain"
              tintColor="#5F5F5F"
              className="w-12 h-12"
          />
        </View>

        <View className="text-ellipsis overflow-hidden">
          
          <Text className="font-semibold text-lg mr-6 ">
            {nome}
          </Text>

          <Text className="font-medium text-md text-gray-300">
            {endereco}
          </Text>
          <Text className="font-medium text-md text-gray-300">
            {distancia}
          </Text>

        </View>
      </View>
    
    </View>
  );
};

export default ActivityCard;
