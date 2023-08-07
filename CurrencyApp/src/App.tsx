import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


//constants
import { currencyByRupee } from './constants'
//components
import CurrencyButton from './components/CurrencyButton'
import Snackbar from 'react-native-snackbar'

const  App = ():JSX.Element => {
  const[inputvalue , setinputvalue] = useState('')
  const[resultvalue , setresultvalue] = useState('')
  const[targetcurrency , settargetcurrency] = useState('')

  const buttonpressed = (targetValue: Currency) => {
    if(!inputvalue){
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor:'#EA7773',
        textColor:'#000000'
      })
    }
    const inputamt = parseFloat(inputvalue)
    if(!isNaN(inputamt)){
      const convertedvalue = inputamt * targetValue.value
      const result = `${targetValue.symbol} ${convertedvalue.toFixed(2)  }`
      setresultvalue(result)
      settargetcurrency(targetValue.value)
    }
    else{
      return Snackbar.show({
        text: 'nat a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor:'#000000'

      })
    }  

  }
  return (
    <>
      <StatusBar/>   
    <View style = {styles.container}>
      <View style ={styles.topcontainer}>
        <View style={styles.rupeecontainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput 
          maxLength={14}
          value={inputvalue}
          onChangeText={setinputvalue}
          keyboardType='number-pad'
          placeholder='enter amount in rupees'/>
        </View>
        {resultvalue && (
          <Text style={styles.resulttxt}>{resultvalue}</Text>
        )}
      </View>
      <View style={styles.bottomcontainer}>
        <FlatList 
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Pressable style={[styles.button, targetcurrency===item.name && styles.selected]} onPress={() => buttonpressed(item)}>
            <CurrencyButton {...item}/>
          </Pressable>
        )}/>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#515151',
},
topcontainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-evenly',
},
resulttxt: {
  fontSize: 32,
  color: '#000000',
  fontWeight: '800',
},
rupee: {
  marginRight: 8,

  fontSize: 22,
  color: '#000000',
  fontWeight: '800',
},
rupeecontainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
inputAmountField: {
  height: 40,
  width: 200,
  padding: 8,
  borderWidth: 1,
  borderRadius: 4,
  backgroundColor: '#FFFFFF',
},
bottomcontainer: {
  flex: 3,
},
button: {
  flex: 1,
  margin: 12,
  height: 60,
  borderRadius: 12,
  backgroundColor: '#fff',
  elevation: 2,

  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowColor: '#333',
  shadowOpacity: 0.1,
  shadowRadius: 1,
},

selected: {
  backgroundColor: '#ffeaa7'
}
})


export default App