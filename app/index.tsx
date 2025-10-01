import { Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black } from "@expo-google-fonts/raleway";

import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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

  const [selectedFlightType, setSelectedFlightType] = useState('Roundtrip');

  if (!fontsLoaded) {
    return null;
  }

  const flightTypes = ['Roundtrip', 'One Way', 'Multi-City'];

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.topcontainer, { height: '35%' }]}>
        <Text style={[globalStyles.logo,]}>
          FlyWise
        </Text>
        <View style={globalStyles.spacer}/>
        <View style={[globalStyles.row, { justifyContent: 'center' }]}>
          {flightTypes.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => setSelectedFlightType(type)}
              style={[
                globalStyles.flighttype,
              ]}
            >
              <Text style={[
                globalStyles.flighttypeText,
                selectedFlightType === type && globalStyles.selectedFlightTypeText
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={globalStyles.spacer}/>
        </View>
        <View style={[globalStyles.row, { justifyContent: 'center' }]}>
        <TextInput style={globalStyles.textinput}  placeholder="From" />
        <TextInput style={globalStyles.textinput}  placeholder="To" />
        </View>

      </View>
    </View>
  );
}
