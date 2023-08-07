import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards(){
  return (
    <View>
      <Text style={styles.headingtext}>flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.Cards , styles.cardone]}>
            <Text>
                RED
            </Text>
        </View>
        <View style={[styles.Cards , styles.cardtwo]}>
            <Text>
                BLUE
            </Text>
        </View>
        <View style={[styles.Cards , styles.cardthree]}>
            <Text>
                GREEN
            </Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontweight:'bold',
        paddingHorizontal:10,
        paddingLeft:10,
    },
    container:{
        flex:1,
        flexDirection:'row',
        margin:10
        
    },
    Cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:8,
        margin:10
    },
    cardone:{
        backgroundColor:'red'
    },
    cardtwo:{
        backgroundColor:'blue'
    },
    cardthree:{
        backgroundColor:'green'
    }
})