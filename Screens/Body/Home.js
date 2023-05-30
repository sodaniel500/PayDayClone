import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import IconBtn from '../../components/IconBtn'
import TopBar from '../MainScreen/TopBar'
import { TxtBtn } from '../../components/CustomBtn'


export default function Home({ navigation }) {
    return (

        <View style={{}}>

            <View style={{}}>
                {/* <TopBar />  */}
            </View>

            <ScrollView>
                <View style={{ borderBottomWidth: 1, alignItems: 'center', paddingTop: 10 }}>
                    <View style={{}}>
                        <Text style={{ color: 'gray' }}>N<Text style={{ fontSize: 40 }}>0</Text><Text>.00</Text></Text>
                    </View>
                </View>

                <View>
                    <IconBtn />
                </View>


                <View style={styles.body}>

                    <View style={styles.box}>
                        <View style={{marginTop: 20}}>
                        <TxtBtn
                            icon="arrow-down-circle"
                            firstText='Send money'
                            SecondText='Transfer money locally or abroad' />

                        <TxtBtn
                            icon="arrow-down-circle"
                            firstText='Request money'
                            SecondText='Get cash from a contact or via a' />
                        </View>
                    </View>

                    <View style={styles.box2}>
                        <View style={{ marginRight: 160, marginTop: 15 }}>
                            <Text style={{ fontWeight: '700', color: 'gray' }}>Get start with Payday</Text>
                        </View>

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

                    <Text style={{color:'black', bottom:60, marginRight:250, fontWeight:'700' }}>Refer & earn</Text>
                
                     
                    <View style={styles.box3}>
                     <Text style={styles.txt}>Earn $3 every</Text>
                     <Text style={styles.txt}>time you invite</Text>
                     <Text style={styles.txt}>a friend (T&C's apply)</Text>
                    </View>

                </View>
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        height: 500,
        marginTop: 103,
        paddingVertical:20
    },
    box: {
        backgroundColor: 'white',
        height: '36%',
        width: '90%',
        bottom: 95,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        // borderWidth: 0.7,
        borderColor: 'gray'
    },
    box2: {
        backgroundColor: 'white',
        height: '58%',
        width: '90%',
        bottom: 77,
        alignItems: 'center',
        // justifyContent:'space-evenly',
        borderRadius: 19,
        // borderWidth: 0.7,
        // borderColor: 'gray',

    },
    box3: {
        backgroundColor: 'black',
        height: '15%',
        width: '90%',
        bottom: 50,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 19,
        // borderWidth: 0.7,
        // borderColor: 'gray',
        paddingVertical:20
    },
    txt:{
        fontSize: 15,
        fontWeight:'700',
        color:'white',
        marginLeft:15,
        bottom: 17
    }
})