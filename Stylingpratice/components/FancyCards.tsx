import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingtext}>Trending</Text>
      <View style={[styles.cards , styles.cardfancy]}>
        <Image
        source={
            require('./images/newyork.jpg')
       }
       style={styles.cardimage}
      />
      <View style={styles.cardbody}>
        <Text style={styles.cardtitle}>NewYork,</Text>
        <Text style={styles.cardlabel}>USA</Text>
        <Text style={styles.carddes}>Lorem ipsum dolor sit amet
         consectetur adipisicing grnsdnb sroffnsnf nnnnpngrng</Text>
         <Text style={styles.cardfoot}>12MIN</Text>
      </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingBottom:8,
        paddingTop:1
    },
    cards:{
      
    },
    cardfancy:{
      backgroundColor:'white',
      borderTopLeftRadius:6,
      borderBottomRightRadius:6,
      width:320,
      marginHorizontal:20
    },
    cardimage:{
        height:215,
        borderRadius:8,
        width:300,
        marginHorizontal:10,
        marginBottom:5,
        marginTop:8
    },
    cardbody:{
      flex:1,
      flexGrow:1,
      marginHorizontal:10
    },
    cardtitle:{
      color:'#000000',
      fontSize:15,
      fontWeight:'bold'
    },
    cardlabel:{
      color:'#000000',
      fontWeight:'bold'
    },
    carddes:{
      color:'#000000'
    },
    cardfoot:{
      color:'#000000'
    }

})