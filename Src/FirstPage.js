import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableHighlight,
  StatusBar,
  Pressable,
} from "react-native";

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./Mask.jpg")}
        style={{
          height: "45%",
          width: "100%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <Text
        style={{
          color: "#343674",
          fontSize: 31,
          margin: 23,
          marginTop: 37,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        The Best Platform For Online Learning
      </Text>
      <Text
        style={{
          color: "#343674",
          fontSize: 15,
          margin: 38,
          marginTop: 0,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua amet sint. Velit
        officia consequat duis enim velit mollit.
      </Text>
      <Pressable
        style={{
          marginTop: 20,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#343674",
          width: 228,
          height: 60,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Start Learning
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    // padding: 20,
    height:"100%",
    backgroundColor: "#F2F2F2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default FirstPage;
