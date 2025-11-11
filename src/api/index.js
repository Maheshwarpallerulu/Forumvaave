import ApiClient from './ApiClient';
import UserAPI from './UserApi';

export const apiClient = new ApiClient();

const combinedAPI = {
  user: new UserAPI(apiClient),
};
export default combinedAPI;
