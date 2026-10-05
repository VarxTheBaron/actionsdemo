import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "hello github actions";
  if (Math.random() > 0.5) {
    console.log("error 50%");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
  },
});
