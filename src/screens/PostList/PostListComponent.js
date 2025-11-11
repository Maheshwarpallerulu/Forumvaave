import React, { memo, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import { INDIVIDUAL_POST_PAGE, USER_DETAILS_PAGE } from "../../routes/RouteConst";
import { useNavigation } from "@react-navigation/native";

const PostListComponent = (props) => {
  const { posts, loading, searchQuery, onSearchChange } = props;
  const navigation = useNavigation();

  // Track which posts are liked (using their IDs)
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId) // unlike
        : [...prev, postId] // like
    );
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isLiked = likedPosts.includes(item.id);

    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate(USER_DETAILS_PAGE, { user: item.user })}
          style={styles.header}
        >
          <Image
            source={{ uri: `https://i.pravatar.cc/150?u=${item.username}` }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.subText}>@{item.username?.toLowerCase()}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(INDIVIDUAL_POST_PAGE, { post: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(INDIVIDUAL_POST_PAGE, { post: item })}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
        </TouchableOpacity>

        <View style={styles.actions}>
          {/* Like Button */}
          <TouchableOpacity
            style={[
              styles.button,
              isLiked && { backgroundColor: "#FEE2E2" }, // light red when liked
            ]}
            onPress={() => toggleLike(item.id)}
          >
            <Text
              style={[
                styles.buttonText,
                isLiked && { color: "#DC2626" }, // red text when liked
              ]}
            >
              {isLiked ? "❤️ Liked" : "👍 Like"}
            </Text>
          </TouchableOpacity>

          {/* Comment Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(INDIVIDUAL_POST_PAGE, { post: item })}
          >
            <Text style={styles.buttonText}>💬 Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fb" }}>
      <View style={styles.headerBar}>
        <Text style={styles.appTitle}>Community Feed</Text>
      </View>

      <SearchBar
        value={searchQuery}
        onChangeText={onSearchChange}
        placeholder="Search by title or username"
      />

      <FlatList
        data={filteredPosts.slice(0, 15)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default memo(PostListComponent);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  subText: {
    fontSize: 12,
    color: "#6B7280",
  },
  title: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    lineHeight: 22,
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
  },
  buttonText: {
    fontSize: 15,
    color: "#855ccaff",
    fontWeight: "600",
  },
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#855ccaff",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
});
