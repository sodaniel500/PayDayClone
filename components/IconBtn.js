import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')

export default function IconBtn({ navigation }) {
    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomControl}>

                <TouchableOpacity onPress={() => { }} 
                style={{flexDirection:'row', alignItems:'center', }}>
                    <AntDesign name="pluscircle" size={24} color="white" />
                    <Text style={{left:5, color:"white"}}>Top up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}
                 style={{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name="swap-horizontal-circle" size={24} color="white" />
                    <Text style={{left:5, color:"white"}}>Swap</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}
                 style={{flexDirection:'row', alignItems:'center'}}>
                    <Feather name="more-horizontal" size={24} color="white" />
                    <Text style={{left:5, color:"white"}}>More</Text>
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
        marginTop: 13,
        backgroundColor: '#263238',
        paddingHorizontal: 10
    },
    bottomControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})