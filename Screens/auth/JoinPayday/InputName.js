
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Theme } from '@react-navigation/native'
import { COLORS } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import CustomTxtInput from '../../../components/CustomTxtInput';

export default function InputName({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hearder}>
        <AntDesign name="arrowleft" size={20} color="black" />
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 40 }}>Create an account</Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.txt}>Start sending and</Text>
        <Text style={styles.txt}>receiving cash globally</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginTop: 5 }}>Already have an account?</Text>
        <TouchableOpacity style={{ top: 3, paddingLeft: 5 }}
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <CustomTxtInput
            placeholder='First & Last name'
          />
        </View>
      </View>

      <View style={{  marginTop: 20, paddingLeft: 5 }}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ color: 'gray' }}>By proceeding, you adgree to our</Text>
          <TouchableOpacity style={{ paddingLeft: 5 }}>
            <Text style={{  }}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row' }}>
          <Text style={{ color: 'gray' }}>and</Text>
          <TouchableOpacity >
            <Text style={{ marginLeft: 5 }}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 345, alignItems: 'center' }}>
        <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate("SetEmail")}>
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