import { useState } from "react";
import { Image, View, Text } from 'react-native';
import icons from "../constants/icons";

const ActivityCard = ({ nome, descricao, feito}) => {
  return (
    <View className="rounded-lg border-2 border-gray-200 bg-white px-4 py-3 mb-4 mx-5">
      
      <View className="flex flex-row justify-between">
        <View>
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-lg mr-6">
              {nome}
            </Text>
    
          </View>

          <Text className="font-medium text-md text-gray-300">
            {descricao}
          </Text>
        </View>

        <View className="">
          {feito ? (
              <Image
                  source={icons.check}
                  resizeMode="contain"
                  tintColor="#0F82FF"
                  className="w-12 h-12"
              />
          ) : (
              <Image
                  source={icons.circle}
                  resizeMode="contain"
                  tintColor="#DEE2E6"
                  className="w-12 h-12"
              />
          )}
        </View>

      </View>
    
    </View>
  );
};

export default ActivityCard;
