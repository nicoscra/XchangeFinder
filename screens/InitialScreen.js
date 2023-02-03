import { View, Button, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/LoadingComponents";
import Error from "../components/ErrorComponent";
import { handleLogin, handleRegister } from "./LoginScreen";

const FeaturedItem = (props) => {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.isError) {
    return <Error />;
  }

  if (item) {
    return (
      <>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 36,
            }}
          >
            XchangeFinder
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "left",
              fontSize: 20,
            }}
          >
            Helping you find the best conversion possible.
          </Text>
        </View>
      </>
    );
  }
};

export default InitialScreen;
