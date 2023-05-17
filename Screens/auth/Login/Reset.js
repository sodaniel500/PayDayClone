import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Theme } from '@react-navigation/native'
import { COLORS } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import CustomTxtInput from '../../../components/CustomTxtInput';

export default function Reset({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.hearder}>
                <AntDesign name="arrowleft" size={20} color="black" />
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 40 }}>Reset</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={styles.txt}>Enter your email</Text>
                <Text style={styles.txt}>address below</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginTop: 5 }}>Remeber password?</Text>
                <TouchableOpacity style={{ top: 3, paddingLeft: 5 }}
                onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontWeight: 'bold' }}>Back to login</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <CustomTxtInput
                        placeholder='Email Address'
                    />
                </View>
            </View>

            <View style={{ marginTop: 410, alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ color: '#fff', fontSize: 18 }}>Reset</Text>
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