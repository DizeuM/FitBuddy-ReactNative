import { useState } from "react";
import { Image, View, Text } from 'react-native';
import icons from "../constants/icons";

const ActivityCard = ({ user_nome, data_hora, relogio, tipo_atividade, km, duracao, bpm }) => {
  return (
    <View className="rounded-lg border-2 border-gray-200 bg-white px-4 py-3 mb-4 mx-5">
      
      <View className="flex flex-row">
        <View className="mr-4">
          <Image
            source={icons.userPic}
            resizeMode="contain"
            tintColor="black"
            className="w-12 h-12"
          />
        </View>

        <View>
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-base mr-6">
              {user_nome}
            </Text>
            {relogio && (
              <View className="rounded-full bg-primary py-1 px-2">
                <Text className="font-semibold text-md text-white">
                  {relogio}
                </Text>
              </View>
            )}
          </View>

          <Text className="font-medium text-md">
            {data_hora}
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <Text className="font-semibold text-lg">
          {tipo_atividade}
          {km && (
            <Text className="font-semibold text-lg">
            {""} de {km}km
            </Text>
        )}
        </Text>

        {km && (
            <View className="rounded-lg border-2 border-gray-200 bg-gray-100 mt-3">
                <Text className="">
                {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
            </View>
        )}
      </View>

      <View className="flex-row justify-between mt-3">
        <Text className="font-semibold text-md">
          Tempo: {duracao}
        </Text>

        {bpm && (
            <Text className="font-semibold text-md">
            Frequência cardíaca: {bpm}bpm
            </Text>
        )}

      </View>
    
    </View>
  );
};

export default ActivityCard;
