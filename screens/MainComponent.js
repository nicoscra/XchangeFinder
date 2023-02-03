import { View, Platform, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import ExchangeInfoScreen from "./ExchangeInfoScreen";
import ExchangeListScreen from "./ExchangeListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#136136" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => {
            <Icon
              name="home"
              type="font-awesome"
              iconStyle={StyleSheet.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
};

const ExchangeListNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ExchangeList"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Exchange List"
        component={ExchangeListScreen}
        options={({ navigation }) => ({
          title: "ExchangeList",
          headerLeft: () => {
            <Icon
              name="money-bill-transfer"
              type="font-awesome"
              iconStyle={StyleSheet.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />;
          },
        })}
      />
      <Stack.Screen
        name="ExchangeInfo"
        component={ExchangeInfoScreen}
        options={(route) => ({
          title: route.params.exchange.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        intitialRouteName="Home"
        drawerStyle={{ backgroundColor: "#88d0b0" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon
                name="home"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ExchangeList"
          component={ExchangeListNavigator}
          options={{
            title: "Exchange List",
            drawerIcon: ({ color }) => (
              <Icon
                name="money-bill-transfer"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            title: "Contact Us",
            drawerIcon: ({ color }) => (
              <Icon
                name="address-card"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
