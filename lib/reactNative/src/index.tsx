import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function Index(props) {
  const state = useLocalProxy({ time: "daily" });

  return (
    <>
      <Text>Report for Jeremy Robson</Text>
      <View onClick={(event) => (state.time = "daily")}>
        <Text>Daily</Text>
      </View>

      <View onClick={(event) => (state.time = "weekly")}>
        <Text>Weekly</Text>
      </View>

      <View onClick={(event) => (state.time = "monthly")}>
        <Text>Monthly</Text>
      </View>
      <Text>Work 5hrs </Text>
      <Text>Previous - 7hrs </Text>
      <Text>32hrs </Text>
      <Text>Previous - 36hrs </Text>
      <Text>103hrs </Text>
      <Text>Previous - 128hrs </Text>
      <Text>Play 1hr </Text>
      <Text>Previous - 2hrs </Text>
      <Text>10hrs </Text>
      <Text>Previous - 8hrs </Text>
      <Text>23hrs </Text>
      <Text>Previous - 29hrs </Text>
      <Text>Study 0hrs </Text>
      <Text>Previous - 1hr </Text>
      <Text>4hrs </Text>
      <Text>Previous - 7hrs </Text>
      <Text>13hrs </Text>
      <Text>Previous - 19hrs </Text>
      <Text>Exercise 1hr </Text>
      <Text>Previous - 1hr </Text>
      <Text>4hrs </Text>
      <Text>Previous - 5hrs </Text>
      <Text>11hrs </Text>
      <Text>Previous - 18hrs </Text>
      <Text>Social 1hr </Text>
      <Text>Previous - 3hrs </Text>
      <Text>5hrs </Text>
      <Text>Previous - 10hrs </Text>
      <Text>21hrs </Text>
      <Text>Previous - 23hrs </Text>
      <Text>Self Care 0hrs </Text>
      <Text>Previous - 1hr </Text>
      <Text>2hrs </Text>
      <Text>Previous - 2hrs </Text>
      <Text>7hrs </Text>
      <Text>Previous - 11hrs </Text>
    </>
  );
}

export default Index;
