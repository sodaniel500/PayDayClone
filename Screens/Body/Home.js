import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import IconBtn from '../../components/IconBtn'


export default function Home({ navigation }) {
  return (
    <View style={{flex: 1}}>

     <View style={{ borderBottomWidth: 1, alignItems: 'center',paddingBottom: 18}}>
     <View style={{  }}>
        <Text style={{color:'gray'}}>N<Text style={{fontSize:40}}>0</Text><Text>.00</Text></Text>
        </View>
     </View>

     <View>
        <IconBtn />
     </View>
       

      <View style={styles.footer}>
        <TouchableOpacity >
        <Text>move</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    // flex: 2
  }
})