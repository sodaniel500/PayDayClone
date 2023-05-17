import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function CustomTxtInput({ placeholder, value }) {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                numberOfLines={1}
                value={value}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        height: height / 13,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 15,
        padding: 10,
        fontWeight: '700'
    }
})