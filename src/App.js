import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from './redux'
import { PersistGate } from "redux-persist/integration/react";
import Root from "./root";


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer >
          <Root />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}



export default App;

