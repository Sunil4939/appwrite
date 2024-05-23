import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { http2 } from '../../services/api';
import Icons from '../Icons';


const ProductInfo = ({ onPress,img, title, mr, id,  ml, description, editPress, deletePress }) => {

  return (
    <TouchableOpacity disabled activeOpacity={0.5} onPress={onPress} style={[styles.box1, mr && { marginRight: mr }, ml && { marginLeft: ml }]}>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={5} style={styles.text3}>{description}</Text>

      <TouchableOpacity style={styles.editBtn} onPress={editPress}>
        <Icons name={'edit1'} size={SIZES.width * 0.06} color={COLORS.gray} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtn} onPress={deletePress}>
        <Icons name={'delete'} size={SIZES.width * 0.06} color={COLORS.gray} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default ProductInfo

const styles = StyleSheet.create({
  box1: {
    borderWidth: 1,
    borderColor: COLORS.gray20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: SIZES.width * 0.9,
    minHeight: SIZES.height * .13,
    alignSelf: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * .03,
    paddingVertical: SIZES.height * .012
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.01,
  },
  
 
  img2: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.06,
    resizeMode: 'contain',
  },
  
  title: {
    width: SIZES.width * 0.4,
    fontSize: SIZES.width * 0.035,
    color: COLORS.black,
    ...FONTS.sixHundred,
    marginBottom: 5,
  }, 
  text3: {
    width: SIZES.width * 0.4,
    fontSize: SIZES.width * 0.03,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    marginBottom: 7,
  },
  
  editBtn: {
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.gray10,
    borderBottomLeftRadius: 8
  },
  deleteBtn: {
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.gray10,
    borderTopLeftRadius: 8
  },
 
});
