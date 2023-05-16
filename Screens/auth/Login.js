import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import CustomTxtInput from '../../components/CustomTxtInput';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hearder}>
            <AntDesign name="arrowleft" size={20} color="black" />
            <Text style={{fontSize: 18, fontWeight:'600', marginLeft: 40}}>Login</Text>
            </View>

            <View style={{marginTop: 30}}>
                <Text style={styles.txt}>Login to your</Text>
                <Text style={styles.txt}>Padday account</Text>

                <Text style={{marginTop: 5}}>Don't have an account? <Text style={{fontWeight:'bold'}}>Create an account.</Text></Text>
            </View>

            <View style={{marginTop: 20}}>
                <CustomTxtInput 
                placeholder='Email Address'
                />
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 15
    },
    hearder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    txt: {
        fontSize: 22,
        fontWeight: '800',
        letterSpacing: 1
    }
})