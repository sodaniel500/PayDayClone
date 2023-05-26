import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const CircleBtn = () => {
    return (
        <TouchableOpacity>
            <ImageBackground
                source={require('../assets/4.jpg')}
                style={{ width: 40, height: 40 }}
                imageStyle={{ borderRadius: 50 }}
            />
        </TouchableOpacity>
    )
}

export const TxtBtn = () => {
    return (

        <View style={{ }}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{ width: 40, height: 40, backgroundColor:'gray', borderRadius: 50, alignItems: 'center', justifyContent:'center'}}>
                <Ionicons name="arrow-up-circle-outline" size={24} color="black" />
                </View>

                <View>
                    <Text style={{ fontSize:16, color: 'gray'}}>Send money</Text>
                    <Text style={{ fontSize:16, color: 'gray'}}>Transfer money locally or abroad</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
