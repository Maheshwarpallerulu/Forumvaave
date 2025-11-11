import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAndUsers, setSearchQuery } from "../../redux/postsSlice";
import PostListComponent from "./PostListComponent";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, loading, searchQuery } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAndUsers());
  }, [dispatch]);

  return (
    <PostListComponent
      posts={posts}
      loading={loading}
      searchQuery={searchQuery}
      onSearchChange={(text) => dispatch(setSearchQuery(text))}
    />
  );
};

export default PostListContainer;
