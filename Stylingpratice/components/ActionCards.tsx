import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingtext}>ActionCards</Text>
      <View style={[styles.card , styles.cardfancy]}>
      <View style={styles.headercontainer}>
      <Text style={styles.headertext}>
        What's new in Reactnative in 23
      </Text>
      </View>
      <Image
      source={
        require('./images/react-native.png')
      } style={styles.imagestyle} />

      <View style={styles.cardbody}>
        <Text  numberOfLines={2}> werfmnifmwsf fjwfwefmfef ewfwpmfmf fjwepfffj
            wfweifwef fnweifwffm wefjmpm fmwefmm fmw fmwpefm
            wfwep wffwfm wefmfm fwefomff wff ewfmfw
            wefjmwfm
        </Text>
      </View>
      <View style={styles.cardfooter}>
            <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/touchableopacity') }>
                <Text style={styles.links}> READ MORE</Text>
            </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        marginHorizontal:8,
        marginTop:10,
        margin:8
    },
    card:{

    },
    cardfancy:{
        backgroundColor:'white',
        borderRadius:10,
        width:330,
        marginHorizontal:13
    },
    headercontainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        fontSize:15,
        marginHorizontal:10,
        marginBottom:10,
        color:'black'
    },
    imagestyle:{
        height:150,
        width:320,
        marginLeft:8
    },
    cardbody:{
    },
    cardfooter:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    links:{
        color:'black',
        backgroundColor:'lightblue',
        padding:8,
        marginBottom:15,
        borderRadius:5,
        
    }

})