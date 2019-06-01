/**
 * App module
 * @module App
 */
   
   /**
     * Repeat <tt>str</tt> several times.
     * @param {string} str The string to repeat.
     * @param {number} [times=1] How many times to repeat the string.
     * @returns {string}
     */
import React from 'react';
import
{
    StyleSheet,
    Text,
    View
}
from 'react-native';

import
{
    AppHome
}
from 'app-interface';

/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>*/

export default class App extends React.Component
{
    render()
    {
        return ( <
            AppHome / >
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});