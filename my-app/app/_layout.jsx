import { Stack } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "Profile Page" }} />
    </Stack>
  );
}