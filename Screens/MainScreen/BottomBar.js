import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import TopBar from './TopBar';
import { useState } from 'react';
import IconBtn from '../../components/IconBtn';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')

export default function BottomBar({ homePress, walletPress, phonePress, settingPress }) {

    const [Header, setHeader] = useState("home")

    return (

        <View>

            <View>
               
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomControl}>

                    <TouchableOpacity
                        onPress={homePress}>
                        <Foundation name="home" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={walletPress}>
                        <Ionicons name="card-sharp" size={24} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={phonePress}>
                        <FontAwesome5 name="headphones-alt" size={24} color="gray" />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={settingPress}>
                        <Ionicons name="settings-sharp" size={24} color="gray" />
                    </TouchableOpacity>

                </View>
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