
import 'react-native-gesture-handler';
import React from "react"
import { Text, View } from "react-native"
import AuthRoute from "./src/routes/AuthRoute"
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App=()=>{
  return(
    <Provider store={store}>
      <AuthRoute />
    </Provider>
       
  )

}
export default App