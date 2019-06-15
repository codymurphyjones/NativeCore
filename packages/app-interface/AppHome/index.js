import React, { userState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

import { PricingCard } from "react-native-elements";

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  toolbarButton: {
    width: 50,
    color: "#fff",
    textAlign: "center"
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  content: {
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#333"
  }
});

/*
function AppHome(props) {
	
	return <Examples />;
}*/

export default class AppHome extends React.Component {
  render() {
    var { height, width } = Dimensions.get("window");
    return (
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}>Add</Text>
          <Text style={styles.toolbarTitle}>
            TickerShare Alpha Build v0.0.1
          </Text>
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
        <ScrollView style={{ height: height }}>
          <View style={styles.content}>
            <Text>Test123 Test123</Text>
          </View>
          <View style={styles.content}>
            <Text>Test123 Test123</Text>
          </View>
          <View style={styles.content}>
            <Text>Test123 Test123</Text>
          </View>

          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />

          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />

          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$25"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
        </ScrollView>
      </View>
    );
  }
}
