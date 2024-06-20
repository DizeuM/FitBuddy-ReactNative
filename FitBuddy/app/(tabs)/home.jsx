import React, { useEffect, useState } from 'react';
import { Image, View, Text, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from "../../constants/icons";
import ActivityCard from "../../components/ActivityCard";

const home = () => {

  const [atividades, setAtividades] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.111:3000/api/atividades/usuario/1');
      const data = await response.json();
      setAtividades(data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-white">
      <FlatList className=""
        data={atividades}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <ActivityCard
          user_nome={item.user_nome}
          data_hora={item.data_hora}
          relogio={item.relogio}
          tipo_atividade={item.tipo_atividade}
          km={item.km}
          duracao={item.duracao}
          bpm={item.bpm}
          />
        )}
        ListHeaderComponent={() => (
          <View className="">
            <View className="flex justify-between mt-4 flex-row px-5">
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
            </View>

            <View className="mt-6">
              <View className="rounded-t-lg border-2 border-b-0 border-gray-200 px-4 py-3">

                <Text className="font-msemibold text-2xl">
                  Atividades
                </Text>
                
              </View>
            </View>
          </View>
        )}
        // ListEmptyComponent={() => (
        //   <EmptyState
        //     title="Nenhuma atividade encontrada"
        //     subtitle="Nenhuma atividade postada ainda"
        //   />
        // )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

    </SafeAreaView>
  );
}

export default home;
