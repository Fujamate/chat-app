import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  const { name } = route.params;
  const { backgroundColor } = route.params;

  // Checks if the Font Color is the same with Background Color
  const textColor = backgroundColor === "#090C08" ? "#FFFFFF" : "#000000";

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Hello {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
