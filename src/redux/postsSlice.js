import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api'

export const fetchPostsAndUsers = createAsyncThunk(
  'posts/fetchPostsAndUsers',
  async () => {
    const postsRes=await api.user.fetchPostsAndUsers()
    const usersRes=await api.user.fetchUsers()
    const sampleImages = [
      'https://picsum.photos/id/237/800/600',
      'https://picsum.photos/id/238/800/600',
      'https://picsum.photos/id/239/800/600',
      'https://picsum.photos/id/240/800/600',
      'https://picsum.photos/id/241/800/600',
    ];

    const combined = postsRes.map((post, index) => {
      const user = usersRes.find((u) => u.id === post.userId);
      const imageUrl = sampleImages[index % sampleImages.length];
      return {
        ...post,
        username: user?.username,
        user,
        imageUrl,
      };
    });

    return combined;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
    searchQuery: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAndUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsAndUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsAndUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = postsSlice.actions;
export default postsSlice.reducer;

