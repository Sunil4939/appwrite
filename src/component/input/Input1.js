import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'



const Input1 = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    editable,
    multiline,
    numberOfLines,
    inputStyle,
    onFocus,
    onBlur,
    error }) => {
    // console.log("error : ", error)

    return (
        <View style={styles.inputBox}>
            <View style={[styles.input_box, inputStyle, error && { marginBottom: SIZES.height * .002 }]}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.placeholderColor}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={[styles.inputTextStyle, inputTextStyle, multiline && { textAlignVertical: 'top' }]}
                    editable={editable}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={onFocus}
                    onBlur={onBlur}
                // autoCompleteType='email'
                // autoComplete={autoComplete}
                // autoCapitalize={autoCapitalize} 'none
                />
                {/* {multiline &&
                    <View style={styles.line_box}>
                        <View style={{ ...styles.line, width: SIZES.width * .01 }} />
                        <View style={{ ...styles.line, width: SIZES.width * .03 }} />
                        <View style={{ ...styles.line, width: SIZES.width * .05 }} />
                    </View>
                } */}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}

        </View>
    )
}

Input1.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    inputStyle: null,
    editable: true,
    multiline: false,
    numberOfLines: null,
    error: null,
    onBlur: null,
    onFocus: null,
}

export default Input1;

const styles = StyleSheet.create({
    inputBox: {
        width: SIZES.width * .92,
        alignSelf: 'center',
    },
    input_box: {
        width: SIZES.width * .92,
        // backgroundColor: COLORS.white,
        alignSelf: 'center',
        marginBottom: SIZES.height * .02,
    },

    inputTextStyle: {
        width: SIZES.width * .92,
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .038,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: SIZES.width * .024,
        borderColor: COLORS.gray53,
        paddingBottom: SIZES.height * .007,
        paddingLeft: SIZES.width * .03,
        // marginBottom: SIZES.height * .01,
    },

    error: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .032,
        color: COLORS.danger,
        // marginBottom: -4,
        marginBottom: SIZES.height * .01,
        // textAlign: 'center',
    },

    line: {
        borderBottomWidth: 1.2,
        borderColor: COLORS.placeholderColor,
        marginBottom: 4,
    },
    line_box: {
        width: SIZES.width * .1,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: SIZES.height * .01,
        transform: [{ skewY: '-45deg' }],
    },
})