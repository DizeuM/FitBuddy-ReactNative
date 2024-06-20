import React, { useEffect, useState } from 'react';
import { Image, View, Text, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from "../../constants/icons";
import AcademyCard from "../../components/AcademyCard";
import academias from '../../dataAcademias.json'

const home = () => {

  const [academiasData, setAcademiasData] = useState([]);

  useEffect(() => {
    setAcademiasData(academias.records.map(record => ({
      id: record[0],
      nome: record[1],
      endereco: record[8],
      distancia: record[16],
    })));
  }, []);

  return (
    <SafeAreaView className="bg-white">

      <FlatList className="mt-3"
        data={academiasData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AcademyCard
            endereco={item.endereco} 
            nome={item.nome}
            distancia={item.distancia}
          />
        )}
        ListHeaderComponent={() => (
          <View className="">
            {/* <View className="flex justify-between mt-4 flex-row px-5">
              <View>
                <Text className="font-mbold text-3xl text-secondary">
                  FitBuddy
                </Text>
              </View>

              <View className="">
                <Image
                  source={icons.bell}
                  resizeMode="contain"
                  tintColor="#FF650F"
                  className="w-8 h-8"
                />
              </View>
            </View>

            <View className="mt-6 px-5">
              <View className="flex-row rounded-full bg-secondary px-4 py-3">

                <View className="mr-4">
                  <Image
                      source={icons.plus}
                      resizeMode="contain"
                      tintColor="#FFF"
                      className="w-8 h-8"
                  />
                </View>

                <Text className="font-mmedium text-md text-white">
                  Continue no foco e adicione uma nova atividade no feed
                </Text>
                
              </View>
            </View> */}

            <View className="mt-6">
              <View className="rounded-t-lg border-2 border-b-0 border-gray-200 px-4 py-3">

                <Text className="font-msemibold text-2xl">
                  Academias
                </Text>
                
              </View>
            </View>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

export default home;
