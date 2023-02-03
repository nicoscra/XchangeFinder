import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Loading;
