import { Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black } from "@expo-google-fonts/raleway";

import { useFonts } from "expo-font";
import React from "react";
import { Text, TextInput, View } from "react-native";
import globalStyles from "./styles/global";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.topcontainer, { height: '35%' }]}>
        <Text style={[globalStyles.logo,]}>
          FlyWise
        </Text>
        <View style={globalStyles.spacer}/>
        <View style={[globalStyles.row, { justifyContent: 'center' }]}>
          <Text style={globalStyles.flighttype}>
            Roundtrip
          </Text>
          <Text style={globalStyles.flighttype}>
            One Way
          </Text>
          <Text style={globalStyles.flighttype}>
            Multi-City
          </Text>
        </View>
        <TextInput style={globalStyles.textinput}  placeholder="Search for a flight" />

      </View>
    </View>
  );
}
