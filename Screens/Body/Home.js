import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import IconBtn from '../../components/IconBtn'
import TopBar from '../MainScreen/TopBar'
import { TxtBtn } from '../../components/CustomBtn'


export default function Home({ navigation }) {
  return (
    
    <View style={{}}>
        
        <View style={{ }}>
        {/* <TopBar />  */}
        </View>

   <ScrollView>
   <View style={{ borderBottomWidth: 1, alignItems: 'center',paddingTop: 10}}>
     <View style={{  }}>
        <Text style={{color:'gray'}}>N<Text style={{fontSize:40}}>0</Text><Text>.00</Text></Text>
        </View>
     </View>

     <View>
        <IconBtn />
     </View>
       

      <View style={styles.body}>
       
        <View>
          <TxtBtn />
        </View>

      </View>
   </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 500,
    marginTop: 103
    
    // flex: 2
  }
})