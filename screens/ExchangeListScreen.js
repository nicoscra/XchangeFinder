import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponents";

const ExchangeListScreen = ({ navigation }) => {
  const exchanges = useSelector((state) => state.exchanges);

  if (exchanges.isLoading) {
    return <Loading />;
  }

  if (exchanges.errMess) {
    return (
      <View>
        <Text>{exchanges.errMess}</Text>
      </View>
    );
  }

  const renderExchangeItem = ({ item: exchange }) => {
    return (
      <Tile
        title={exchange.name}
        caption={exchange.description}
        featured
        onPress={() => navigation.navigate("ExchangeInfo", { exchange })}
        imageSrc={{ uri: baseUrl + "item.image" }}
      />
    );
  };

  return (
    <FlatList
      data={exchanges.exchangesArray}
      renderItem={renderExchangeItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExchangeListScreen;
