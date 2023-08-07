import React from "react";

import { View,
         Text,
        StyleSheet,
    useColorScheme, 
    SafeAreaView} from 'react-native'

function apppro():JSX.Element{
    const isdarkmode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
        <View style={isdarkmode ? styles.darkbg : styles.lightbg}>
            <Text style={isdarkmode ? styles.whitetext : styles.darktext}>
              Hello World !!!
            </Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
 container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
 },
 whitetext:{
    color: '#FFFFFF'
 },
 darktext:{
    color: '#000000'
 },
 lightbg:{
    backgroundColor:'white'
 },
 darkbg:{
    backgroundColor:'black'
 }    
})


export default apppro