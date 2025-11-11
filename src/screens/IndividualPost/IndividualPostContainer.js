import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import IndividualPostComponent from "./IndividualPostComponent";
import api from '../../api'

const IndividualPostContainer = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments()
  }, [post.id])

  const getComments = async () => {
    setLoading(true);
    const res = await api.user.getComments(post.id);
    setLoading(false);
    setComments(res)
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#444" />
      </View>
    );
  }

  return <IndividualPostComponent
    post={post}
    comments={comments}
  />;
};

export default React.memo(IndividualPostContainer);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
