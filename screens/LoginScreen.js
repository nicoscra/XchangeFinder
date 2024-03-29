import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { CheckBox, Input, Button, Icon } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ImagePicker from "expo-image-picker";
import { baseUrl } from "../shared/baseUrl";

const LoginTab = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    console.log("username:", username);
    console.log("password:", password);
    console.log("remember:", remember);
    if (remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username,
          password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  };

  useEffect(() => {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      const userinfo = JSON.parse(userdata);
      if (userinfo) {
        setUsername(userinfo.username);
        setPassword(userinfo.password);
        setRemember(true);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        leftIcon={{ type: "font-awesome", name: "user-o" }}
        onChangeText={(text) => setUsername(text)}
        value={username}
        containerStyle={styles.formInput}
        leftIconContainerStyle={styles.formIcon}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "key" }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        containerStyle={styles.formInput}
        leftIconContainerStyle={styles.formIcon}
      />
      <CheckBox
        title="Remember Me"
        center
        checked={remember}
        onPress={() => setRemember(!remember)}
        containerStyle={styles.formCheckbox}
      />
      <View style={styles.formButton}>
        <Button
          onPress={() => handleLogin()}
          title="Login"
          color="#fff"
          icon={
            <Icon
              name="sign-in"
              type="font-awesome"
              color="#fff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{ backgroundColor: "#136136" }}
        />
      </View>
      <View style={styles.formButton}>
        <Button
          onPress={() => navigation.navigate("Register")}
          title="Register"
          type="font-awesome"
          color="black"
          icon={
            <Icon
              name="user-plus"
              type="font-awesome"
              color="white"
              iconStyle={{ marginRight: 10 }}
            />
          }
          titleStyle={{ color: "white" }}
        />
      </View>
    </View>
  );
};

const RegisterTab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const [imageUrl, setImageUrl] = useState(baseUrl);

  const handleRegister = () => {
    const userInfo = {
      username,
      password,
      firstName,
      lastName,
      email,
      remember,
    };
    console.log(JSON.stringify(userInfo));
    if (remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username,
          password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  };

  const getImageFromCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (cameraPermission.status === "granted") {
      const capturedImage = await ImagePicker.launchCameraAsync({
        allowEditing: true,
        aspeect: [1, 1],
      });
      if (!capturedImage.cancelled) {
        console.log(capturedImage);
        setImageUrl(capturedImage.uri);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            loadingIndicatorSource={logo}
            style={styles.image}
          />
          <Button title="Camera" onPress={getImageFromCamera} />
        </View>
        <Input
          placeholder="Username"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={(text) => setUsername(text)}
          value={username}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="First Name"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Last Name"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope-o" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <CheckBox
          title="Remember Me"
          center
          checked={remember}
          onPress={() => setRemember(!remember)}
          containerStyle={styles.formCheckbox}
        />
        <View style={styles.formButton}>
          <Button
            onPress={() => handleRegister()}
            title="Register"
            color="#136136"
            icon={
              <Icon
                name="user-plus"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{ backgroundColor: "#136136" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
  const tabBarOptions = {
    activeBackgroundColor: "#136136",
    inactiveBackgroundColor: "#03FC79",
    activeTintColor: "#fff",
    inactiveTintColor: "#808080",
    labelStyle: { fontSize: 16 },
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Login"
        component={LoginTab}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icon name="sign-in" type="font-awesome" color={props.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterTab}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icon name="user-plus" type="font-awesome" color={props.color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
  },
  formIcon: {
    marginRight: 10,
  },
  formInput: {
    paddin: 8,
    height: 60,
  },
  formCheckbox: {
    margin: 8,
    backGroundColor: null,
  },
  formButton: {
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default LoginScreen;
