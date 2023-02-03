import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Error() {
  return (
    <View style={styles.error}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.errorText}>
        Error! Check your wifi or mobile connection!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  errorText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Error;
