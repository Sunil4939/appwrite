import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS,  SIZES, icons } from '../../constants'
import Icons from '../Icons'


const InputWithIcon = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    leftIcon,
    editable,
    label,
    multiline,
    numberOfLines, error,
    onBlur,
    onFocus,
    iconType,
    iconName,
    inputStyle }) => {

    return (
        <View style={styles.main_box}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.inputBox, inputStyle, error && { marginBottom: SIZES.height * .003 }]}>
                {leftIcon && <Icons type={'image'} src={leftIcon} size={SIZES.width * .06} style={styles.icon} />}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.placeholderColor}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    style={[styles.inputTextStyle, inputTextStyle, multiline && {textAlignVertical: 'top'}]}
                    editable={editable}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

InputWithIcon.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    keyboardType: "default",
    maxLength: null,
    inputStyle: null,
    leftIcon: null,
    editable: true,
    label: null,
    multiline: false,
    numberOfLines: null,
}

export default InputWithIcon;

const styles = StyleSheet.create({
    main_box: {
        width: SIZES.width * .92,
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: SIZES.width * .03,
    },
    inputBox: {
        width: SIZES.width * .92,
        borderWidth: 1,
        borderRadius: SIZES.width * .024,
        borderColor: COLORS.gray53,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: SIZES.height * .02,
    },

    inputTextStyle: {
        // borderWidth: 1,
        width: SIZES.width * .82,
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        paddingBottom: SIZES.height * .009,
        paddingLeft: SIZES.width * .03,
    },

    label: {
        // borderWidth: 1,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: SIZES.height * .005,
    },
    error: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .032,
        color: 'red',
        marginBottom: SIZES.height * .01,
    },
})