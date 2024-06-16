import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PopularJobCard from "../components/PopularJobCard";
import FeaturedJobCard from "../components/FeaturedJobCard";

const jobs = [
  { id: 1, title: "Software Engineer", company: "Company A" },
  { id: 2, title: "Product Manager", company: "Company B" },
  // Add more job objects here...
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <Text style={styles.subtitle}>Email: {email}</Text>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {jobs.slice(0, 8).map((job) => (
        <PopularJobCard key={job.id} job={job} />
      ))}

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      {jobs.slice(0, 8).map((job) => (
        <FeaturedJobCard key={job.id} job={job} />
      ))}
    </ScrollView>
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
  sectionTitle: {
    fontSize: 20,
    marginVertical: 16,
  },
});

export default HomeScreen;
