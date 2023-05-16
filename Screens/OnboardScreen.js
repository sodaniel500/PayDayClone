import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState, animated } from 'react'
import { COLORS, SIZES } from '../constants'
import { StatusBar } from 'expo-status-bar'
import data from '../components/data'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const OnboardScreen = ({ navigation }) => {

    const flatlistRef = useRef()
    const [currentPage, setCurrentPage] = useState(0)
    const [viewableItems, setViewableItems] = useState([])

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)
    })

    const handleNext = () => {
        if (currentPage == data.length - 1)
            return;

        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1
        })
    }

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
                    <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontWeight: 'bold', }}>
                        {item.title}
                    </Text>
                    <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center', fontWeight: '300', opacity: 0.7, lineHeight: 25, letterSpacing: 0.1 }}>
                        {item.description}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', right: 13 }}>
                        <Ionicons name="remove-circle-outline" size={24} color="#D6DBDF" />
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: '300', opacity: 1, lineHeight: 25, letterSpacing: 0.1, left: 4 }}>{item.iconName1}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', left: 10 }}>
                        <MaterialIcons name="offline-bolt" size={24} color="#D6DBDF" />
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: '300', opacity: 1, lineHeight: 25, letterSpacing: 0.1, left: 4 }}>{item.iconName2}</Text>
                    </View>

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
                    <View style={{ flexDirection: 'row', alignItems: 'center', bottom: 275, position: 'relative' }}>
                        {
                            // No of dots
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 15,
                                        height: 5,
                                        borderRadius: 5,
                                        backgroundColor: index == currentPage
                                            ? COLORS.primary
                                            : COLORS.white + '50',
                                        marginRight: 8
                                    }} />
                            ))
                        }

                    </View>

                    {/* Continue button*/}
                    {/* Show or Hide Continue btn by screen*/}
                    {
                        currentPage != data.length - 1 ? (

                            <View
                                style={{
                                    alignItems: 'center',
                                    borderRadius: 15,
                                    backgroundColor: COLORS.background,
                                    borderWidth: 0.5,
                                    borderColor: 'gray',
                                    width: '95%',
                                    opacity: 0.9,
                                    paddingVertical: 13
                                }}>
                                <TouchableOpacity
                                    onPress={handleNext}
                                    activeOpacity={1}
                                >
                                    <Text style={{ fontSize: 20, fontWeight: '400', color: COLORS.white }}>Continue</Text>
                                </TouchableOpacity>
                            </View>

                        ) : (
                            //Join padday/login btn
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{
                                    alignItems: 'center',
                                    borderRadius: 15,
                                    backgroundColor: COLORS.background,
                                    borderWidth: 0.5,
                                    borderColor: 'gray',
                                    width: '46%',
                                    opacity: 0.9,
                                    paddingVertical: 16,
                                    right: 5
                                }}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                    >
                                        <Text style={{ fontSize: 16, fontWeight: '400', color: COLORS.white }}>Join Padday</Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        alignItems: 'center',
                                        borderRadius: 15,
                                        backgroundColor: '#171717',
                                        borderWidth: 0.5,
                                        borderColor: 'gray',
                                        width: '46%',
                                        opacity: 0.9,
                                        paddingVertical: 16,
                                        left: 5
                                    }}>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate("Login")}
                                        activeOpacity={1}
                                    >
                                        <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Login</Text>
                                    </TouchableOpacity></View>
                            </View>
                        )
                    }

                </View>
            </SafeAreaView>
        )
    }

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

                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                extraData={SIZES.width}
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