import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
export default class XchangeFinder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 32.5149,
            longitude: -117.038,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
AppRegistry.registerComponent("XchangeFinder", () => XchangeFinder);
