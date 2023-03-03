import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { ImageBackground } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import FirstPage from "./Src/FirstPage";
import SecondScreen from "./Src/SecondScreen";

const App = () => {
  return (
    <View>
      {/* <FirstPage /> */}
      <SecondScreen />
    </View>
  );
};

// console.log(StatusBar.currentHeight)
export default App;

// paddingTop:Platform.os=="Android" ? StatusBar.currenthEIGHT : 0
