import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { INDIVIDUAL_POST_PAGE, POST_LIST_PAGE, USER_DETAILS_PAGE } from './RouteConst';
import { IndividualPostPage, PostListPage, UserDetailsPage } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()
const AuthRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name={POST_LIST_PAGE} component={PostListPage} />
        <Stack.Screen name={INDIVIDUAL_POST_PAGE} component={IndividualPostPage} />
        <Stack.Screen name={USER_DETAILS_PAGE} component={UserDetailsPage} />
         </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthRoute;