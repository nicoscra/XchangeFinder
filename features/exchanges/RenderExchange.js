import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";

const RenderExchange = (props) => {
  const { exchange } = props;
  if (exchange) {
    return (
      <Card containerStyle={StyleSheet.cardContainer}>
        <Card.Image source={{ uri: baseUrl + exchange.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {exchange.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20, flexDirection: "row" }}>
          Buy:{exchange.buyRate}
        </Text>
        <Text style={{ margin: 20, flexDirection: "row" }}>
          Sell: {exchange.sellRate}
        </Text>
        <Icon
          name={props.isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#136136"
          raised
          reverse
          onPress={() =>
            props.isFavorite
              ? console.log("Already marked as a favorite ")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
});

export default RenderExchange;
