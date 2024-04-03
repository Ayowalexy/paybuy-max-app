import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Toast, { BaseToast } from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import Navigation from "./src/navigations/Index";
import { UserContextProvider } from "./src/context/userContext";

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "ReadexPro-Bold": require("./assets/fonts/ReadexPro-Bold.ttf"),
    "ReadexPro-ExtraLight": require("./assets/fonts/ReadexPro-ExtraLight.ttf"),
    "ReadexPro-Light": require("./assets/fonts/ReadexPro-Light.ttf"),
    "ReadexPro-Medium": require("./assets/fonts/ReadexPro-Medium.ttf"),
    "ReadexPro-SemiBold": require("./assets/fonts/ReadexPro-SemiBold.ttf"),
    "ReadexPro-Regular": require("./assets/fonts/ReadexPro-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "pink" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "400",
        }}
      />
    ),
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserContextProvider>
          <Navigation />
          <Toast config={toastConfig} />
        </UserContextProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
