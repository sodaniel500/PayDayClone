import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { StatusBar } from 'expo-status-bar'
import data from '../components/data'
import { ImageBackground } from 'react-native'

const renderTopSection = () => {
    return (
        <SafeAreaView>
            <View style={styles.top}>
                <Image source={require('./../assets/paydaylogo.png')} style={styles.img} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }} >Padday</Text>
            </View>
        </SafeAreaView>
    )
}

const renderFlatlistItem = ({ item }) => {
    return (
        <View style={{
            width: SIZES.width,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                alignItems: 'center',
                marginVertical: SIZES.base * 2
            }}>
                <ImageBackground
                    source={item.image}
                    style={{ width: 345, height: 300, resizeMode: 'contains' }}
                />
            </View>
            <View style={{ paddingHorizontal: SIZES.base * 4, marginVertical: SIZES.base * 4 }}>
                <Text style={{color:'#fff', fontSize: 20, textAlign:'center', fontWeight: 'bold', opacity: '0.4'}}>
                    {item.title}
                    </Text>
            </View>

        </View>
    )
}


const renderBottomSection = () => {
    return (
        <SafeAreaView>
            <View style={{
                // flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15
            }}>
                {/*Pagination*/}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        // No of dots
                        [...Array(data.length)].map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: 15,
                                    height: 5,
                                    borderRadius: 5,
                                    backgroundColor: COLORS.primary,
                                    marginRight: 8
                                }} />
                        ))
                    }

                </View>

                {/* Continue button*/}
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                    backgroundColor: COLORS.black,
                    borderWidth: 0.5,
                    borderColor: 'gray',
                    width: 300,
                    height: 50
                }}
                    activeOpacity={1}
                >
                    <Text style={{ fontSize: 20, fontWeight: '400', color: COLORS.white }}>Continue</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const OnboardScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

            {/* TOP SECTION */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}
            />

            {/* BOTTOM SECTION - pagination &  next or GetStarted button */}
            {renderBottomSection()}

        </View>
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.base * 14,
        top: 55,
        right: 15,
        position: 'absolute'
    },
    img: {
        height: 30,
        width: '50%',
        resizeMode: 'contain'
    }
});