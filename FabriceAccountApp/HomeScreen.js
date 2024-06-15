import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <Text style={styles.subtitle}>Email: {email}</Text>
      {/* Popular and Featured job cards will be displayed here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default HomeScreen;
