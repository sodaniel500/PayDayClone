import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import CustomTxtInput from '../../../components/CustomTxtInput';
import { COLORS } from '../../../constants';

export default function SetEmail({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hearder}>
                <AntDesign name="arrowleft" size={20} color="black" />
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 40 }}>Create an account</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={styles.txt}>Set email & password</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginTop: 5 }}>Please use your personal email address.</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <CustomTxtInput
                        placeholder='Email Address'
                    />
                </View>
                <View style={{ marginTop: 15,}}>
                    <CustomTxtInput
                        placeholder='Password'
                    />
                </View>
                <View style={{ marginTop: 15,}}>
                    <CustomTxtInput
                        placeholder='Referral Code (Optional)'
                    />
                </View>
            </View>

            <View style={{ marginTop: 260, alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn}  >
                  <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 16,
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
    },
    btn: {
       backgroundColor: COLORS.background,
       height: 50,
       borderRadius: 15,
       width: 330,
       alignItems: 'center',
       justifyContent: 'center'
    }
})