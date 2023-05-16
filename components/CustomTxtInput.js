import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen'); 

export default function CustomTxtInput({placeholder}) {
  return (
    <View>
      <TextInput 
       placeholder={placeholder}
       style={styles.input}
       numberOfLines={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginTop: 10,
        marginBottom: 10,
        // width: width / 1.1,
        height: height / 13,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 10,
        
    }
})