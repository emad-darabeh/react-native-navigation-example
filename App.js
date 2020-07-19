import "react-native-gesture-handler";
import React from "react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "~/navigation/RootNavigation";

// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";

// screens
import SplashScreen from "./src/screens/SplashScreen";

// stacks
import RootStack from "./src/navigation/root.stack";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {(bootstrapped) => {
            if (bootstrapped) {
              return (
                <NavigationContainer ref={navigationRef}>
                  <RootStack />
                </NavigationContainer>
              );
            } else {
              return <SplashScreen />;
            }
          }}
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
