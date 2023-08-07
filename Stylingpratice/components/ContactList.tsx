import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
    ];
  return (
    <View>
      <Text style={styles.headingtext}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(( {uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.usercard}>
                <Image 
                source={{
                    uri:imageUrl
                }} style={styles.userimage}/>
                <View>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
                </View>
                    
            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8,
        margin:5

    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    usercard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:4,
        backgroundColor:'#FFF',
        borderRadius:6
    },
    userimage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:20,
        marginHorizontal:12
    },
    username:{
        fontSize:15,
        fontWeight:'600',
        color:'black'
    },
    userstatus:{
        fontSize:12,
        color:'lightblue'
        
    }
    
})