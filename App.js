import { StyleSheet, LogBox } from "react-native";
import { useEffect } from "react";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

// import Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

// import Asyncstorage
import { useNetInfo } from "@react-native-community/netinfo";

const App = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxp01JmeLCzT1j2zqlHtVwRtGVJEh9RsY",
    authDomain: "chatapp-3bf76.firebaseapp.com",
    projectId: "chatapp-3bf76",
    storageBucket: "chatapp-3bf76.appspot.com",
    messagingSenderId: "218373592538",
    appId: "1:218373592538:web:ca13651ef20b26b6e85ce3",
    measurementId: "G-BV0H97BD92",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start">
          {(props) => <Start db={db} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              db={db}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
