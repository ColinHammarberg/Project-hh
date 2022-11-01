import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RenderWeatherData from "./src/renderWeatherData";
import AboutPage from "./src/aboutPage";
import SupportPage from "./src/support";
import { colors } from "./colors/colorCodes";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.text}></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Weather Report");
        }}
      >
        <Text style={styles.text}>Weather Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.text}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Support");
        }}
      >
        <Text style={styles.text}>Support page</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Weather Report" component={RenderWeatherData} />
        <stack.Screen name="About" component={AboutPage} />
        <stack.Screen name="Support" component={SupportPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_COLOR,
  },
  text: {
    fontSize: 30,
  },
});
