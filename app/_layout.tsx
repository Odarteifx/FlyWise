import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  <StatusBar style="light" backgroundColor="#0A2540" />
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>;
}
