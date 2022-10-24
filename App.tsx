import { SafeAreaView, StatusBar, Text, View } from "react-native";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import Home from "@/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-gray-700">
        <Home />
      </SafeAreaView>
    </>
  );
}
