import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RenderExchange from "../features/exchanges/RenderExchange";
import { EXCHANGES } from "../shared/exchanges";

const ExchangeInfoScreen = ({ route }) => {
  const { exchange } = route.params;

  const [exchanges, setExchanges] = useState(EXCHANGES);
  const [favorite, setFavorite] = useState(false);

  const renderExchangeItem = ({ item }) => {
    return (
      <View style={StyleSheet.exchangeitem}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 12 }}>
          {`-- ${item.author}, ${item.date}`}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={exchanges.filter(
        (exchange) => exchange.buyRate.exchangeID === exchange.id
      )}
      renderItem={renderExchangeItem}
      ketExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        marginHorizontal: 20,
        paddingVertical: 20,
      }}
      ListHeaderComponent={
        <>
          <RenderExchange
            exchange={exchange}
            isFavorite={favorite}
            markFavorite={() => setFavorite(true)}
          />
          <Text style={StyleSheet.exchangesTitle}>Exchanges</Text>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  exchangesTitle: {
    textAlign: "center",
    backgroundColor: "#136136",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    paddingTop: 30,
  },
  exchangeItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#fff",
    backgroundColor: "#136136",
  },
});

export default ExchangeInfoScreen;
