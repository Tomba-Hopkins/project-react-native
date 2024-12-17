import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { image } from "../constants";

import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from "../components/CustomButton";

const RootLayout = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image source={image.logo} resizeMode="contain" className="w-[130px] h-[84px]" />
          <Image source={image.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with

              <Text className="text-secondary-200"> Aora</Text>

            </Text>

            <Image source={image.path} className="w-[136px] h-[15px] absolute -bottom-2 right-20" resizeMode="contain" />

          </View>


          <Text className="text-sm font-rwregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton />
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
