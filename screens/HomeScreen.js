import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { EXCHANGES } from "../shared/exchanges";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [exchanges, setExchanges] = useState(EXCHANGES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);

  const featPartner = partners.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featExchange = exchanges.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featPartner} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featExchange} />
    </ScrollView>
  );
};

export default HomeScreen;
