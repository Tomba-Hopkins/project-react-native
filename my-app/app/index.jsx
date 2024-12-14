import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { image } from "../constants";

import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image source={image.logo} className="w-[130px]" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default RootLayout;
