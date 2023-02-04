import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RenderExchange from "../features/exchanges/RenderExchange";
import { toggleFavorite } from "../favorites/favoritesSlice";

const ExchangeInfoScreen = ({ route }) => {
  const { exchange } = route.params;
  const exchanges = useSelector((state) => state.exchanges);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const renderExchangeItem = ({ item }) => {
    return (
      <View style={StyleSheet.exchangeItem}>
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
      data={exchanges.exchangesArray.filter(
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
            isFavorite={favorites.includes(favorites.id)}
            markFavorite={() => dispatch(toggleFavorite(exchange.id))}
          />
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
