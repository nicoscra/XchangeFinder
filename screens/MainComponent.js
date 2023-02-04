import { View, Platform, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import ExchangeInfoScreen from "./ExchangeInfoScreen";
import ExchangeListScreen from "./ExchangeListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPartners } from "../features/partners/partnersSlice";
import { fetchExchanges } from "../features/exchanges/exchangesSlice";
import { fetchPromotions } from "../features/promotions/promotionsSlice";
import { fetchComments } from "../features/comments/commentsSlice";

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
        name="ExchangeList"
        component={ExchangeListScreen}
        options={({ navigation }) => ({
          title: "Exchange List",
          headerLeft: () => {
            <Icon
              name="money"
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
        options={({ route }) => ({
          title: route.params.exchange.name,
        })}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeader}>XchangeFinder</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
  </DrawerContentScrollView>
);

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExchanges());
    dispatch(fetchPromotions());
    dispatch(fetchPartners());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        intitialRouteName="Home"
        drawerContent={CustomDrawerContent}
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
          name="Exchange List"
          component={ExchangeListNavigator}
          options={{
            title: "Exchange List",
            drawerIcon: ({ color }) => (
              <Icon
                name="money"
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
  drawerHeader: {
    color: "white",
    backgroundColor: "#136136",
    height: 140,
    alignItem: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    fontSize: 40,
    fontWeight: "bold",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
