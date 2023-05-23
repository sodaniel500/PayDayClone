import { Text, View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import BottomBar from './BottomBar';
import { CircleBtn } from '../../components/CustomBtn';
import TopBar from './TopBar';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5FFFA' }}>

            <TopBar />

            <View style={styles.container}>
                <ScrollView>
                    <Text>MainScreen</Text>
                </ScrollView>
            </View>

            <View>
                <BottomBar />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TopContainer: {
        borderTopColor: '#393E46',
        borderBottomWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 40
    },
    TopControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})