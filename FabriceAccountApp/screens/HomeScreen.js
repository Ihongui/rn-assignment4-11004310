import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import PopularJobCard from "../components/PopularJobCard";
import FeaturedJobCard from "../components/FeaturedJobCard";

const featuredJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    background: "#FFD700",
    image: require("../assets/photo21.jpg"),
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Google",
    salary: "$160,000",
    location: "Accra, Ghana",
    background: "#00BFFF",
    image: require("../assets/favicon.png"),
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Apple",
    salary: "$150,000",
    location: "San Francisco, US",
    background: "#FF6347",
    image: require("../assets/icon.png"),
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Microsoft",
    salary: "$170,000",
    location: "Seattle, US",
    background: "#8A2BE2",
    image: require("../assets/splash.png"),
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Amazon",
    salary: "$165,000",
    location: "New York, US",
    background: "#7FFF00",
    image: require("../assets/photo21.jpg"),
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Netflix",
    salary: "$155,000",
    location: "Los Gatos, US",
    background: "#FF4500",
    image: require("../assets/photo21.jpg"),
  },
  {
    id: 7,
    title: "Full Stack Developer",
    company: "Tesla",
    salary: "$160,000",
    location: "Palo Alto, US",
    background: "#1E90FF",
    image: require("../assets/favicon.png"),
  },
  {
    id: 8,
    title: "Blockchain Developer",
    company: "Coinbase",
    salary: "$175,000",
    location: "San Francisco, US",
    background: "#FFD700",
    image: require("../assets/icon.png"),
  },
];

const popularJobs = [
  {
    id: 1,
    title: "Jr Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, US",
    image: require("../assets/favicon.png"),
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
    image: require("../assets/photo21.jpg"),
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
    image: require("../assets/adaptive-icon.png"),
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Toyota",
    salary: "$86,000/y",
    location: "Japan, JA",
    image: require("../assets/icon.png"),
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Amazon",
    salary: "$86,000/y",
    location: "Florida, US",
    image: require("../assets/favicon.png"),
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Samsung",
    salary: "$86,000/y",
    location: "Florida, US",
    image: require("../assets/photo21.jpg"),
  },
  {
    id: 7,
    title: "Project Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
    image: require("../assets/favicon.png"),
  },
  {
    id: 8,
    title: "Marketing Manager",
    company: "Twitter",
    salary: "$90,000/y",
    location: "San Francisco, US",
    image: require("../assets/splash.png"),
  },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
        <Image
          source={require("../assets/photo21.jpg")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <View style={styles.filterIconContainer}>
          <Text style={styles.filterIcon}>🔍</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredJobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      {popularJobs.map((job) => (
        <PopularJobCard key={job.id} job={job} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#888",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterIconContainer: {
    padding: 10,
  },
  filterIcon: {
    fontSize: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#888",
  },
});

export default HomeScreen;
