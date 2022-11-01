import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";
import { countryList } from "./constants";
import { colors } from "../colors/colorCodes";

const SupportPage = () => {
  const [example, setExample] = useState([]);
  let exampleCountries = countryList;
  let exampleArray = [];

  function exampleList() {
    while (exampleArray.length < 8) {
      var pick =
        exampleCountries[Math.floor(Math.random() * exampleCountries.length)];
      exampleArray.push(pick);
    }
    setExample(exampleArray);
  }

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Support</Text>
      <View style={styles.supportLayout}>
        <Text style={styles.textStyle}>
          When you enter the weather page, you can enter a country or city name,
          and all neccessary weather information will be rendered accordingly.
          View some examples of countries you can search for by clicking the
          button down below.
        </Text>
      </View>

      <View>
        <Button
          title="Get suggestions"
          onPress={() => {
            exampleList();
          }}
        />
      </View>
      <FlatList
        data={example}
        horizontal={false}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <View style={styles.renderedExample}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  renderedExample: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    backgroundColor: colors.PRIMARY_COLOR,
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
    fontSize: 12,
    color: colors.BLACK,
    padding: 15,
    textAlign: "center",
  },
  supportLayout: {
    backgroundColor: colors.PRIMARY_COLOR,
    paddingHorizontal: 15,
    marginVertical: 12,
  },
});

export default SupportPage;
