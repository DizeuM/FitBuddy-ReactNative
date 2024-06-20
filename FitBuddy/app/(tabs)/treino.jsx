import { Image, View, Text, FlatList, RefreshControl } from 'react-native'
import { useState } from "react";
import icons from "../../constants/icons";
import WorkoutCard from "../../components/WorkoutCard";
import { SafeAreaView } from 'react-native-safe-area-context'
import treinoSemana from '../../dataTreino.json'

const treino = () => {
  return (
    <SafeAreaView className="bg-secondary">
      <View className="">
            <View className="flex justify-between mt-4 flex-row px-5">
              <View>
                <Text className="font-msemibold text-3xl text-white">
                  Meu plano
                </Text>
              </View>

              <View className="">
                <Image
                  source={icons.pen}
                  resizeMode="contain"
                  tintColor="white"
                  className="w-8 h-8"
                />
              </View>
            </View>

            <View className="mt-6 px-5">
              <View className="rounded-lg bg-white px-4 py-3">

                <Text className="font-msemibold text-base text-gray-400">
                  Semana 8
                </Text>
                <Text className="font-msemibold text-lg mb-5">
                  Ganho de massa
                </Text>


                <Text className="font-msemibold text-sm text-gray-300">
                  Treino de hoje
                </Text>
                <Text className="font-msemibold text-base">
                  Costas e Biceps
                </Text>
                
              </View>
            </View>

            <View className="mt-6">
              <View className="rounded-t-lg bg-white px-4 py-3">

                <Text className="font-msemibold text-2xl">
                  Essa semana
                </Text>
                
                <FlatList className="mt-3"
                  data={treinoSemana}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <WorkoutCard
                    nome={item.nome}
                    descricao={item.descricao}
                    feito={item.feito}
                    />
                  )}
                />
              </View>
            </View>
          </View>

    </SafeAreaView>
  )
}

export default treino