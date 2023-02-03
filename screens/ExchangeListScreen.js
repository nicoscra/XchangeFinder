import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { EXCHANGES } from "../shared/exchanges";

const ExchangeListScreen = ({ navigation }) => {
  const [exchanges, setExchanges] = useState(EXCHANGES);

  const renderExchangeItem = ({ item: exchange }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate("ExchangeInfo", { exchange })}
      >
        <Avatar source={exchange.image} rounded />
        <ListItem.Title>{exchange.name}</ListItem.Title>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={exchanges}
      renderItem={renderExchangeItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExchangeListScreen;
