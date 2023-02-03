import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderExchange = (props) => {
  const { exchange } = props;
  if (exchange) {
    return (
      <Card containerStyle={StyleSheet.cardContainer}>
        <Card.Image source={exchange.image}>
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
        <Text style={{ margin: 20 }}>Buy {exchange.buyRate}</Text>
        <Text style={{ margin: 20 }}>Sell {exchange.sellRate}</Text>
        <Icon
          name={props.isFavorite ? "hear" : "heart-o"}
          type="font-awesome"
          color="#fff"
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
