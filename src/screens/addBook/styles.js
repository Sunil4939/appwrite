import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({

  innnerContainer: {
    width: SIZES.width * 0.92,
    alignSelf: 'center',
  },
  btn: {
    marginTop: SIZES.height * 0.04,
  },
  Welcome: {
    fontSize: SIZES.width * .06,
    ...FONTS.sixHundred,
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: SIZES.height * 0.08,
  },
  forget_btn: {
    alignSelf: 'flex-end',
    marginTop: SIZES.height * -0.01,
    // marginBottom: SIZES.height * 0.1,
  },
  forget: {
    color: COLORS.pink,
    fontSize: 13,
    // marginRight: SIZES.width * 0.05,
  },
  subTitle: {
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.fiveHundred,
    textAlign: 'center',
    alignSelf: 'center',
    width: SIZES.width * 0.4,
    marginBottom: SIZES.height * 0.05,
  },
  continueRow: {
    width: SIZES.width * 0.92,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * 0.25,
  },
  continueText: {
    ...FONTS.fiveHundred,
    fontSize: SIZES.width * 0.032,
    marginHorizontal: SIZES.width * 0.02,
    marginBottom: -1,
    color: COLORS.gray,
  },
  border: {
    borderTopWidth: 1,
    width: SIZES.width * 0.29,
    borderColor: COLORS.gray20,
    // marginTop: SIZES.height * 0.03,
  },
  googlebtn: {
    borderWidth: 1,
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.05,
    borderRadius: 10,
    borderColor: COLORS.gray20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.03,
  },
  googleImg: {
    width: SIZES.width * 0.065,
    height: SIZES.height * 0.033,
    resizeMode: 'contain',
  },
  signingoogle: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: 12,
    marginBottom: -3,
    marginLeft: SIZES.width * 0.01,
  },
  rowAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.02,
  },
  alreadyAccount: {
    color: COLORS.gray60,
    ...FONTS.fiveHundred,
    fontSize: 12,
  },
  signin: {
    color: COLORS.pink,
    ...FONTS.fiveHundred,
    fontSize: 12,
  },
});
