import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  if (true) {
    const [count, setCount] = useState(0);
  }

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
