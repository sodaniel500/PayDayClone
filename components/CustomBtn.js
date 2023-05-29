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

export const TxtBtn = ({ icon, firstText, SecondText, thridText}) => {
    return (

        <View style={{ marginBottom: 10 }}>
            <TouchableOpacity style={{flexDirection: 'row',}}>
                <View style={{ width: 40, height: 40, backgroundColor:'gray', borderRadius: 50, alignItems: 'center', justifyContent:'center', right: 20}}>
                <Ionicons name={icon} size={24} color="black" />
                </View>

                <View>
                    <Text style={{ fontSize:16, color: 'gray', fontWeight:'500'}}>{firstText}</Text>
                    <Text style={{ fontSize:16, color: 'gray', fontWeight:'500'}}>{SecondText}</Text>
                    <Text style={{ fontSize:16, color: 'gray', fontWeight:'500'}}>{thridText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
