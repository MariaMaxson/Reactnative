import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import EvlCards from './components/EvlCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>    
        <EvlCards/>  
        <FancyCards/>
        <FancyCards/>
        <ActionCards/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App