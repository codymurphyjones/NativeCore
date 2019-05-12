import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    
    },
    toolbarButton:{
        width: 50,            
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                
    },
	mainContainer:{
        flex:1                  
    },
    content:{
		textAlign:'center',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor:'#f00',
		color: '#333',             
    }
});

export default class ReactLayouts extends React.Component{
    render() {
        return (
          <View>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}>Add</Text>
                    <Text style={styles.toolbarTitle}>This is the title</Text>
                    <Text style={styles.toolbarButton}>Like</Text>
                </View>
				<View style={styles.content}> 
					<Text>Test123 Test123</Text>
				</View>
				<View style={styles.content}> 
					<Text>Test123 Test123</Text>
				</View>
				<View style={styles.content}> 
					<Text>Test123 Test123</Text>
				</View>
            </View>
        );
    }
}



