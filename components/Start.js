import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Start = ({ navigation }) => {
  // Saving the names
  const [name, setName] = useState("");
  // Saving the background colors
  const [backgroundColor, setBackgroundColor] = useState("");

  // sending the props via this handler
  const startChatting = () => {
    navigation.navigate("Chat", {
      name: name,
      backgroundColor: backgroundColor,
    });
  };

  return (
    <ImageBackground
      source={require("../img/Background-Image.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.appTitle}>Chat App</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        />
        {/* Background Color Picker */}
        <View style={styles.buttonColorContainer}>
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#090C08",
              },
              backgroundColor === "#090C08" && styles.selectedBackgroundColor,
            ]}
            onPress={() => setBackgroundColor("#090C08")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#474056",
              },
              backgroundColor === "#474056" && styles.selectedBackgroundColor,
            ]}
            onPress={() => setBackgroundColor("#474056")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#8A95A5",
              },
              backgroundColor === "#8A95A5" && styles.selectedBackgroundColor,
            ]}
            onPress={() => setBackgroundColor("#8A95A5")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#B9C6AE",
              },
              backgroundColor === "#B9C6AE" && styles.selectedBackgroundColor,
            ]}
            onPress={() => setBackgroundColor("#B9C6AE")}
          />
        </View>
        {/* Starts the Chat */}
        <TouchableOpacity
          style={styles.startChattingButton}
          onPress={startChatting}
        >
          <Text style={styles.startChattingText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: "88%",
    height: "44%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "50%",
  },

  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: 15,
    color: "#757083",
    borderColor: "#757083",
    fontSize: 16,
    fontWeight: "300",
    opacity: 50,
  },

  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  buttonColorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },

  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 13,
  },

  selectedBackgroundColor: {
    borderColor: "#FCD95B",
    borderWidth: 3,
  },

  startChattingButton: {
    width: "88%",
    backgroundColor: "#757083",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  startChattingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Start;
