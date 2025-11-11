import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../../components/Header";

const UserDetailsComponent = (props) => {
  const { user, onBack } = props;

  const handleWebsitePress = () => {
    let url = user.website;
    // Add https:// if missing
    if (!url.startsWith("http")) {
      url = `https://${url}`;
    }
    Linking.openURL(url);
  };


  return (
    <View style={styles.container}>
      <Header title="User Profile" onBack={onBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <Image
            source={{ uri: `https://i.pravatar.cc/300?u=${user.username}` }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📞 Contact Info</Text>
            <Text style={styles.info}>Phone: {user.phone}</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={styles.info}>Website: </Text>
              <TouchableOpacity onPress={handleWebsitePress}>
                <Text style={[styles.info, styles.link]}>{user.website}</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🏢 Company</Text>
            <Text style={styles.info}>{user.company.name}</Text>
            <Text style={styles.subInfo}>{user.company.catchPhrase}</Text>
            <Text style={styles.subInfo}>{user.company.bs}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📍 Address</Text>
            <Text style={styles.info}>
              {user.address.suite}, {user.address.street},{" "}
              {user.address.city} - {user.address.zipcode}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(UserDetailsComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5f9",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    margin: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },
  username: {
    textAlign: "center",
    color: "#777",
    marginBottom: 4,
  },
  email: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  section: {
    marginVertical: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginBottom: 3,
  },
  info: {
    color: "#555",
    fontSize: 14,
    marginBottom: 2,
  },
  subInfo: {
    color: "#777",
    fontSize: 13,
    marginLeft: 4,
  },
  postsHeader: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
    color: "#222",
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  postContent: {
    padding: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 6,
  },
  postBody: {
    color: "#666",
    fontSize: 14,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  actionButton: {
    backgroundColor: "#e3f2fd",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionText: {
    color: "#1e88e5",
    fontWeight: "600",
  },
  link: {
    color: "#1e88e5", // blue color for link
    textDecorationLine: "underline",
  },
});
