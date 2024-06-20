import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

        <View className="relative mt-5">
          <Text className="text-3xl font-msemibold text-secondary text-center">
          Sua rotina de treinos,{"\n"}
          mais motivada com{"\n"}

          <Text className="font-mbold ">FitBuddy</Text>{"\n"}
          </Text>
        </View>

        <Link href={"/home"} className='text-2xl font-msemibold text-primary text-center'>Entrar</Link>
    </View>
  );
}

