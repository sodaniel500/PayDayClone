import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

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