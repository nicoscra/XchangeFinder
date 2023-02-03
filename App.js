import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

import Loading from "./components/LoadingComponent";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
