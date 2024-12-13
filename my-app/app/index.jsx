import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center bg-slate-900 justify-center ">
      <Text className="text-2xl text-slate-200 font-rwbold">Hello Pak</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-red-400">
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
