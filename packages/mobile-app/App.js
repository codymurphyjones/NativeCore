import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SearchTicker } from '@mager1794/app-interface';

/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>*/

export default class App extends React.Component {
  render() {
    return (
     <SearchTicker />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
