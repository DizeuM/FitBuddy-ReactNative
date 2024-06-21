import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AcademyCard from "../../components/AcademyCard";
import academias from '../../dataAcademias.json'
import Map from '../../components/Map';

const descobrir = () => {

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
    <>
      <Map/>


      <FlatList  style={{ height: '10%' }}
        data={academiasData}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <AcademyCard
            endereco={item.endereco} 
            nome={item.nome}
            distancia={item.distancia}
          />
        )}
        ListHeaderComponent={() => (
          <View className="">
            <View className="">
              <View className="rounded-t-lg border-2 border-b-0 border-gray-200 px-4 py-3">
                <Text className="font-msemibold text-2xl">
                  Academias
                </Text>
                
              </View>
            </View>
          </View>
        )}
      />

    </>
  );
}

export default descobrir;



// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import academiasData from '../../dataAcademias.json'  // Assumindo que o arquivo JSON está na raiz do projeto

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [academias, setAcademias] = useState([]);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     })();
    
//     setAcademias(academiasData.records);
//   }, []);

//   if (!location) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: location.latitude, longitude: location.longitude }}
//           title="Minha Localização"
//           description="Você está aqui"
//           pinColor="#FF650F"
//         />

//         {academias.map((academy, index) => (
//           <Marker
//             key={index}
//             coordinate={{ latitude: academy[16], longitude: academy[17] }}
//             title={academy[1]}
//             description={academy[8]}
//             pinColor="#0F82FF"
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });