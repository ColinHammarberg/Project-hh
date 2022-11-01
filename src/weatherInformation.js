import {
    ActivityIndicator,
    Button,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import { colors } from "../colors/colorCodes";
  import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
  import WeatherIcon from "./weatherIcon";
  import { useState } from "react";
  
  const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR, WHITE } = colors;
  
  const WeatherInformation = (props) => {
    const {
      onChangeText,
      onSubmitEditing,
      value,
      loading,
      data,
      name,
      initials,
      humidity,
      maxTemperature,
      currentTemperature,
      iconUrl,
      currentWeather,
    } = props;
  
    let sourceURL =
      "https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg";
  
    const [showFahrenheit, setShowFahrenheit] = useState(false);
    const [showBackground, setShowBackground] = useState(sourceURL);
    const fahrenheitMuliple = 9;
  
    function showBG() {
      if (showBackground === sourceURL) {
        setShowBackground("");
      } else {
        setShowBackground(sourceURL);
      }
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={{
            uri: showBackground,
          }}
          style={{ height: 800 }}
        >
          <ScrollView>
            <View>
              <Button
                title={
                  showBackground === sourceURL
                    ? "Hide image background"
                    : "Show image background"
                }
                onPress={() => {
                  showBG();
                }}
              />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Enter country or city..."
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                value={value}
                placeholderTextColor="#000"
                style={styles.textInput}
              />
            </View>
            <Text style={{ margin: "auto", marginTop: -50, marginBottom: 40 }}>
              Current search: {name}
            </Text>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>Last updated</Text>
              <Text style={styles.date}>{new Date().toLocaleString()}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 40 }}>
              <WeatherIcon
                style={styles.image}
                source={{
                  uri: `${iconUrl}`,
                }}
              />
  
              <Text style={styles.currentWeather}>{currentWeather}</Text>
            </View>
  
            {loading && (
              <View>
                <ActivityIndicator size={"large"} color="#000" />
              </View>
            )}
  
            <View style={styles.weatherDetails}>
              <View style={styles.weatherDetailsRow}>
                <View
                  style={{
                    ...styles.weatherDetailsBox,
                    borderRightWidth: 1,
                    borderRightColor: BORDER_COLOR,
                  }}
                >
                  <View style={styles.weatherDetailsRow}>
                    <FontAwesome5
                      color={PRIMARY_COLOR}
                      name="temperature-low"
                      size={25}
                    />
                    <View style={styles.weatherDetailsItems}>
                      <Text>Country :</Text>
                      <Text style={styles.textSecondary}>
                        {data ? `${name} ${initials}` : null}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                  <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons
                      name="water"
                      size={30}
                      color={PRIMARY_COLOR}
                    />
                    <View style={styles.weatherDetailsItems}>
                      <Text>Humidity :</Text>
                      <Text style={styles.textSecondary}>{`${humidity}`} %</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  ...styles.weatherDetailsRow,
                  borderTopWidth: 1,
                  borderTopColor: BORDER_COLOR,
                }}
              >
                <View
                  style={{
                    ...styles.weatherDetailsBox,
                    borderRightWidth: 1,
                    borderRightColor: BORDER_COLOR,
                  }}
                >
                  <View style={styles.weatherDetailsRow}>
                    <FontAwesome5
                      color={PRIMARY_COLOR}
                      name="temperature-low"
                      size={25}
                    />
                    <View style={styles.weatherDetailsItems}>
                      <Text>Temperature :</Text>
                      <Text style={styles.textSecondary}>
                        {!showFahrenheit
                          ? `${currentTemperature} °C`
                          : `${
                              (currentTemperature * fahrenheitMuliple) / 5 + 32
                            } °`}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                  <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="plus" size={25} color={PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItems}>
                      <Text>Max :</Text>
                      <Text style={styles.textSecondary}>
                        {" "}
                        {!showFahrenheit
                          ? `Max ${maxTemperature} °C`
                          : `${(maxTemperature * fahrenheitMuliple) / 5 + 32} °`}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Button
              title={!showFahrenheit ? "Show fahrenheit" : "Show Celcius"}
              onPress={() => setShowFahrenheit(() => !showFahrenheit)}
            />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: WHITE,
    },
    image: { width: 200, height: 100 },
    currentWeather: {
      fontSize: 24,
      marginTop: 20,
    },
    weatherDetails: {
      marginTop: 30,
      margin: 15,
      borderWidth: 1,
      borderColor: BORDER_COLOR,
      borderRadius: 10,
    },
    weatherIcons: {
      alignContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    date: {
      fontSize: 25,
      color: SECONDARY_COLOR,
      fontWeight: "700",
      margin: "auto",
    },
    textInput: {
      paddingVertical: 12,
      padding: 5,
      marginHorizontal: 20,
      backgroundColor: "#f1f1f1",
      fontSize: 19,
      borderRadius: 8,
      borderColor: PRIMARY_COLOR,
    },
    textInputView: {
      marginVertical: 70,
    },
  
    weatherDetailsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    imageRow: {
      marginLeft: 50,
      marginTop: 20,
      marginBottom: 20,
    },
    weatherDetailsBox: {
      flex: 1,
      padding: 20,
    },
    weatherDetailsItems: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    textSecondary: {
      fontSize: 15,
      color: SECONDARY_COLOR,
      fontWeight: "700",
      margin: 7,
    },
  });
  
  export default WeatherInformation;
  