import { ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useCallback } from 'react'

export default function EvlCards() {
  return (
    <View>
      <Text style={styles.headingtext}>EvlCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardeveone]}>
            <Text>Tap</Text>
        </View>
        </View>
      </ScrollView>
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
    cards:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:10,
        margin: 8,
    },
    cardeveone:{
        backgroundColor:'#CAD5E2'
           
    }
})