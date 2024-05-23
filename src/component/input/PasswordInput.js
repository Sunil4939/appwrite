import { StyleSheet, Text, TextInput, Image, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import Icons from '../Icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const PasswordInput = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    maxLength,
    label,
    inputStyle,
    leftIcon,
    onBlur,
    error }) => {
        const [secure, setSecure] = useState(true)
    return (
        <View>
            {label &&
                <Text style={styles.label}>{label}</Text>
            }
            <View style={[styles.input_box, inputStyle, error && { marginBottom: SIZES.height * .003, }]}>
            {leftIcon && <Icons type={'image'} src={leftIcon} size={SIZES.width * .06} style={styles.icon} />}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.placeholderColor}
                    onChangeText={onChangeText}
                    value={value}
                    maxLength={maxLength}
                    style={[styles.inputTextStyle, inputTextStyle,]}
                    secureTextEntry={secure}
                    onBlur={onBlur}
                />
                <TouchableOpacity style={styles.btn}
                    onPress={() => setSecure(!secure)}
                >
                    <Icons name={secure ? "eye-off" : "eye"} size={20} color={COLORS.black4} />
                </TouchableOpacity>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

PasswordInput.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: null,
    value: null,
    maxLength: null,
    inputStyle: null,
    error: null,
    label: null,
    onPress: null,
    onBlur: null,
    leftIcon: icons.password,
}

export default PasswordInput;

const styles = StyleSheet.create({

    input_box: {
        width: SIZES.width * .92,
        // backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderWidth: 1.2,
        borderRadius: SIZES.width * .024,
        borderColor: COLORS.gray53,
        marginBottom: SIZES.height * .02,
    },
    icon: {
        marginLeft: SIZES.width * .03,
    },
    inputTextStyle: {
        width: SIZES.width * .71,
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .041,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        paddingBottom: SIZES.height * .009,
        paddingLeft: SIZES.width * .03,
    },
    label: {
        // borderWidth: 1,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: -5,
    },
    error: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .034,
        color: COLORS.danger,
        // marginBottom: -4,
        marginBottom: SIZES.height * .01,
    },

    btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },

})