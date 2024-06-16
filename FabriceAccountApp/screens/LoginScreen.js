import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Solutech</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.line}></View>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.line}></View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Icon name="apple" type="font-awesome" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Icon name="google" type="font-awesome" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton1}>
          <Icon name="facebook" type="font-awesome" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 20,
  },

  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3b5998",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 90,
    left: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 130,
    left: 20,
  },
  input: {
    height: 48,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
    top: 12,
  },
  loginButton: {
    backgroundColor: "#3b5998",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
    top: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 16,
    top: 0,
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 16,
  },
  socialLoginButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    top: 30,
  },
  socialLoginButton1: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    top: 30,
  },
  registerText: {
    fontSize: 14,
    color: "#666",
    top: 50,
  },
  registerLink: {
    color: "#3b5998",
    fontWeight: "bold",
    top: 50,
  },
});

export default LoginScreen;
