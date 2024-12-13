import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center text-center w-full h-screen">
      <Text className="text-pink-600">Hello smith</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-green-500">
        Go to Profile
      </Link>
    </View>
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
