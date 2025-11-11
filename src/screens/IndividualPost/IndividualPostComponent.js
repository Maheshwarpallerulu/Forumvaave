import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const IndividualPostComponent = (props) => {
  const {post,comments}=props;
  const renderComment = ({ item }) => (
    <View style={styles.commentCard}>
      <Image
        source={{ uri: `https://i.pravatar.cc/100?u=${item.email}` }}
        style={styles.commentAvatar}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.commentName}>{item.name}</Text>
        <Text style={styles.commentBody}>{item.body}</Text>
        <Text style={styles.commentEmail}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image
            source={{ uri: `https://i.pravatar.cc/150?u=${post.username}` }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.location}>📍 Hyderabad, Telangana, India</Text>
          </View>
        </View>

        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />

        <View style={styles.postBody}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>

          <View style={styles.actionsRow}>
            <Text style={styles.likes}>👍 217</Text>
            <Text style={styles.commentsCount}>💬 {comments.length}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.commentsTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderComment}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default memo(IndividualPostComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 10,
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111",
  },
  location: {
    fontSize: 13,
    color: "#666",
  },
  postImage: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginVertical: 10,
  },
  postBody: {
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#222",
  },
  body: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
  },
  likes: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  commentsCount: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  commentsTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginVertical: 10,
    color: "#222",
  },
  commentCard: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  commentAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
  },
  commentName: {
    fontWeight: "600",
    fontSize: 14,
    color: "#111",
  },
  commentBody: {
    fontSize: 13,
    color: "#333",
    marginVertical: 2,
  },
  commentEmail: {
    fontSize: 12,
    color: "gray",
  },
});
