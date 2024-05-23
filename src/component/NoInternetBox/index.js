import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants';

const NoInternetBox = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.box} >
                <Image source={images.wifi} style={styles.image} resizeMode='contain' />
                <Text style={styles.title}>No Internet</Text>
            </View>
        </View>
    )
}

export default NoInternetBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,

        // height: 123,
    },
    box: {
        width: SIZES.width * .7,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        elevation: 10,
        borderRadius: 8,
        // borderWidth: 1,
    },

    image: {
        width: SIZES.width * .5,
        height: SIZES.height * .3,
        marginVertical: SIZES.height * .01,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .06,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
})