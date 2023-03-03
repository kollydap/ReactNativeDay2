import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          height: 90,
        }}
      >
        <Image source={require("./Group1.png")} />
        <Image source={require("./Mask1.png")} />
      </View>

      <View
        style={{
          height: 110,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text
          style={{
            fontWeight: 500,
            fontSize: 42,
            color: "#22264C",
            width: 213.81,
          }}
        >
          Popular Courses
        </Text>
        <Image source={require("./Group2.png")} />
      </View>

      <View>
        <View style={styles.objContainer}>
          <Image
            style={{ height: 91, width: 90, borderRadius: 15 }}
            source={require("./Mask2.png")}
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#22264C",
              // marginLeft: -60,
            }}
          >
            UI Design
          </Text>
          <View style={styles.lessonStyle}>
            <Text style={styles.lessonNum}>22</Text>
            <Text style={styles.lessonText}>Lessons</Text>
          </View>
        </View>
        <View style={styles.objContainer}>
          <Image
            style={{ height: 91, width: 90, borderRadius: 15 }}
            source={require("./Mask.jpg")}
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,

              color: "#22264C",

              // marginLeft: -60,
            }}
          >
            UX Design
          </Text>
          <View style={styles.lessonStyle}>
            <Text style={styles.lessonNum}>22</Text>
            <Text style={styles.lessonText}>Lessons</Text>
          </View>
        </View>
        <View style={styles.objContainer}>
          <Image
            style={{ height: 91, width: 90, borderRadius: 15 }}
            source={require("./Mask2.png")}
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#22264C",

              // marginLeft: -60,
            }}
          >
            Design Thinking
          </Text>
          <View style={styles.lessonStyle}>
            <Text style={styles.lessonNum}>22</Text>
            <Text style={styles.lessonText}>Lessons</Text>
          </View>
        </View>
        <View style={styles.objContainer}>
          <Image
            style={{ height: 91, width: 90, borderRadius: 15 }}
            source={require("./Mask.jpg")}
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#22264C",
              // marginLeft: -60,
            }}
          >
            UX Design
          </Text>
          <View style={styles.lessonStyle}>
            <Text style={styles.lessonNum}>22</Text>
            <Text style={styles.lessonText}>Lessons</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // padding: 20,
    backgroundColor: "#F2F2F2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  objContainer: {
    // backgroundColor: "green",
    height: 104,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    borderColor: "rgba(178, 192, 211, 0.3)",
    borderWidth: 1,
    justifyContent: "space-between",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  lessonStyle: {
    backgroundColor: "#F4F7FA",
    width: 87,
    height: 91,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  lessonNum: {
    color: "#343674",
    fontSize: 26,
    fontWeight: 400,
  },
  lessonText: {
    fontWeight: 400,
    color: "#5E4890",
  },
});

export default SecondScreen;
