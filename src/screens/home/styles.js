import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    btn: {
        width: SIZES.width * .4,
        height: SIZES.height * .05,
        borderRadius: SIZES.width * .1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: SIZES.width * .04,
        marginBottom: SIZES.height * .02,
        marginTop: SIZES.height * .01,
    },
    btnText: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .038,
        color: COLORS.white,
        marginBottom: -4,
    }
})