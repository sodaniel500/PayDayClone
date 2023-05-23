import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')

export default function BottomBar({ navigation }) { 
    return (
        <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>

            <TouchableOpacity onPress={() => { }}>
                <Foundation name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name="card-sharp" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
            <FontAwesome5 name="headphones-alt" size={24} color="gray" />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
            <Ionicons name="settings-sharp" size={24} color="gray" />
            </TouchableOpacity>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        // borderTopColor: '#393E46',
        // borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 5,
        backgroundColor: '#FFFFFF'
    },
    bottomControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})