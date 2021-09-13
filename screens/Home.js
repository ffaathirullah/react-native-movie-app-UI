import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Animated,
  ScrollView,
} from "react-native";

import {
  dummyData,
  icons,
  images,
  theme,
  COLORS,
  SIZES,
  FONTS,
} from "../constants";

const Home = ({ navigation }) => {
  function renderHeader() {
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
      }}
      onPress={() => console.log("profile")}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
        }}
      ></TouchableOpacity>
    </View>;
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.black }}
    ></SafeAreaView>
  );
};

export default Home;
