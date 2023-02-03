import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

const ContactScreen = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["fake@fake.com"],
      subject: "Inquiry",
      body: "To whom it may concern:",
    });
  };
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>Email: fake@fake.com</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#136136", margin: 40 }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ margin: 10 }}
              />
            }
            onPress={() => sendMail()}
          />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
