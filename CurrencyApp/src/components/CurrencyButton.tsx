import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type CurrencyButtonprops = PropsWithChildren<{
    name:string,
    flag:string
}>
 const CurrencyButton = (props: CurrencyButtonprops):JSX.Element => {
    return(
        <View style={styles.buttoncontainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.countryname}>{props.name}</Text>
        </View>
    )
 }


const styles = StyleSheet.create({
    buttoncontainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:24,
        color:'#FFFFFF',
        marginBottom:4
    },
    countryname:{
        fontSize:14,
        color:'#2d3436'
    }
})

export default CurrencyButton