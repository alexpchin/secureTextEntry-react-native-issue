import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SecureTextEntry Problem</Text>
      <TextInput
        style={styles.input}
        placeholder={"password"}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder={"passwordConfirmation"}
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    width: width - 20
  }
});
