import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TxtBtn } from '../../components/CustomBtn'

export default function Phone() {
    return (
        <View style={styles.container}>

            <View>
            <Text style={{fontSize: 15, fontWeight:'600', color:'#fff'}}>24/7 Help Center</Text>
            </View>

            <View style={{marginTop: 30, alignItems:'center'}}>
            <Text style={{fontSize: 15, fontWeight:'600', color:'#fff'}}>Tell us how we can help </Text>
            <Text style={{ fontWeight:'600', color:'#fff'}}>Our crew of superheroes are</Text>
            <Text style={{ fontWeight:'600', color:'#fff'}}>standing by for service & support</Text>
            </View>


            <View style={styles.body}>

            <View style={{marginTop: 19, justifyContent: 'center'}}>
                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText='Verify your account'
                                SecondText='This lets you unlock other'
                                thridText='Link' />

                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText='Create a new account'
                                SecondText='up to 10 currencies supported' />


                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText='Create a virtual card'
                                SecondText='Shop across hunderds of stores' />

                        </View>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'white',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        // marginVertical: 400

    },
    body: {
        backgroundColor: 'white',
        height: '36%',
        width: '90%',
        bottom: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        borderColor: 'gray',
        marginTop:400,
    }
})