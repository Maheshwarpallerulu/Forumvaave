import Base from './BaseApi';

export default class UserAPI extends Base {
   async getComments(userId) {
    return this.apiClient.get(`posts/${userId}/comments`);
  }
  async fetchPostsAndUsers() {
    return this.apiClient.get('/posts');
  }

  async fetchUsers() {
    return this.apiClient.get('/users');
  }

}
