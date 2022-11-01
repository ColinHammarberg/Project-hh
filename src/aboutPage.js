import { Linking, StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { colors } from "../colors/colorCodes";

const AboutPage = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Everyday Weather </Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://img.freepik.com/premium-vector/sun-icon-bright-yellow-sol-symbol-with-rays-childish-simple-style_53562-14613.jpg?w=2000",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About us </Text>
        <Text style={[styles.textStyle]}>
          We are providing weather information to people everyday. We source our
          data from openweathermap. Read more about it by clicking on the link
          down below.
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <Button
          title="Read about Open Weather Map API"
          onPress={() => Linking.openURL("https://openweathermap.org/")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: colors.BLACK,
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    color: colors.BLACK,
    paddingBottom: 30,
    textAlign: "center",
  },
  aboutLayout: {
    backgroundColor: colors.PRIMARY_COLOR,
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: colors.BLACK,
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center",
  },

  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default AboutPage;
