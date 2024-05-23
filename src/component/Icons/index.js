import React from "react"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Zocial from 'react-native-vector-icons/Zocial'
import { Image, StyleSheet } from "react-native"
import { icons, images } from "../../constants"




const Icons = ({ name, color, size, style }) => {
    switch (name) {
        // Bottom tab icons
        case 'home':
            return <Image source={icons.active_bottom_home}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode="contain"
            />
     



        // icons
        case 'back':
            return <Ionicons style={StyleSheet.create(style)} name="arrow-back" size={size} color={color} />
        case 'edit1':
            return <Feather style={StyleSheet.create(style)} name="edit" size={size} color={color} />
        case 'delete':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="delete" size={size} color={color} />

        case 'right':
            return <Feather style={StyleSheet.create(style)} name="chevron-right" size={size} color={color} />
        case 'share':
            return <Feather style={StyleSheet.create(style)} name="share-2" size={size} color={color} />
        case 'pluscircleo':
            return <AntDesign style={StyleSheet.create(style)} name="pluscircleo" size={size} color={color} />
        case 'plus':
            return <Entypo style={StyleSheet.create(style)} name="plus" size={size} color={color} />
        case 'minus':
            return <Entypo style={StyleSheet.create(style)} name="minus" size={size} color={color} />
        case 'location':
            return <Ionicons style={StyleSheet.create(style)} name="location-sharp" size={size} color={color} />
        case 'email-outline':
            return <Feather style={StyleSheet.create(style)} name="mail" size={size} color={color} />
        case 'call':
            return <Ionicons style={StyleSheet.create(style)} name="ios-call" size={size} color={color} />
        case 'close':
            return <AntDesign style={StyleSheet.create(style)} name="close" size={size} color={color} />
        case 'facebook':
            return <FontAwesome style={StyleSheet.create(style)} name="facebook" size={size} color={color} />
        case 'lock-outline':
            return <SimpleLineIcons style={StyleSheet.create(style)} name="lock" size={size} color={color} />
        case 'eye-off-outline':
            return <Ionicons style={StyleSheet.create(style)} name="eye-off-outline" size={size} color={color} />
        case 'eye-outline':
            return <Ionicons style={StyleSheet.create(style)} name="eye-outline" size={size} color={color} />
        case 'email':
            return <Zocial style={StyleSheet.create(style)} name="email" size={size} color={color} />
        case 'lock':
            return <Fontisto style={StyleSheet.create(style)} name="locked" size={size} color={color} />
        case 'user':
            return <FontAwesome5 style={StyleSheet.create(style)} name="user-alt" size={size} color={color} />
        case 'eye-off':
            return <Ionicons style={StyleSheet.create(style)} name="eye-off" size={size} color={color} />
        case 'eye':
            return <Ionicons style={StyleSheet.create(style)} name="eye" size={size} color={color} />
        case 'setting':
            return <Ionicons style={StyleSheet.create(style)} name="settings" size={size} color={color} />



        case 'checkmark-circle':
            return <Ionicons style={StyleSheet.create(style)} name="checkmark-circle" size={size} color={color} />
        case 'checkmark':
            return <Ionicons style={StyleSheet.create(style)} name="checkmark-circle-outline" size={size} color={color} />
        case 'carlist':
            return <Ionicons style={StyleSheet.create(style)} name="car-sport" size={size} color={color} />
        case 'accountcircle':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="account-circle-outline" size={size} color={color} />
        case 'up-outline':
            return <Feather style={StyleSheet.create(style)} name="chevron-up" size={size} color={color} />
        case 'down-outline':
            return <Feather style={StyleSheet.create(style)} name="chevron-down" size={size} color={color} />
        case 'heart':
            return <AntDesign style={StyleSheet.create(style)} name="hearto" size={size} color={color} />
        case 'inbox':
            return <Ionicons style={StyleSheet.create(style)} name="chatbox-ellipses-outline" size={size} color={color} />
        case 'threeDots':
            return <Entypo style={StyleSheet.create(style)} name="dots-three-horizontal" size={size} color={color} />
        case 'down':
            return <AntDesign style={StyleSheet.create(style)} name="caretdown" size={size} color={color} />
        case 'cloud':
            return <Ionicons style={StyleSheet.create(style)} name="ios-cloud-upload-outline" size={size} color={color} />
        case 'calendar':
            return <Ionicons style={StyleSheet.create(style)} name="calendar" size={size} color={color} />
        case 'info-circle':
            return <Entypo style={StyleSheet.create(style)} name="info-with-circle" size={size} color={color} />

        case 'apple':
            return <FontAwesome style={StyleSheet.create(style)} name="apple" size={size} color={color} />
        // case 'google':
        //     return <AntDesign style={StyleSheet.create(style)} name="google" size={size} color={color} />



        case 'cancel':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="cancel" size={size} color={color} />
        case 'menu':
            return <Feather style={StyleSheet.create(style)} name="menu" size={size} color={color} />
        case 'bank':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="bank" size={size} color={color} />
        case 'wallet1':
            return <FontAwesome5 style={StyleSheet.create(style)} name="wallet" size={size} color={color} />
        case 'edit1':
            return <FontAwesome5 style={StyleSheet.create(style)} name="edit" size={size} color={color} />
        case 'add-location':
            return <MaterialIcons style={StyleSheet.create(style)} name="add-location" size={size} color={color} />
        case 'edit-location':
            return <MaterialIcons style={StyleSheet.create(style)} name="edit-location" size={size} color={color} />

        case 'star-fill':
            return <FontAwesome style={StyleSheet.create(style)} name="star" size={size} color={color} />
        case 'star-outline':
            return <FontAwesome style={StyleSheet.create(style)} name="star-o" size={size} color={color} />
        case 'twitter-circle':
            return <Entypo style={StyleSheet.create(style)} name="twitter-with-circle" size={size} color={color} />
        case 'facebook-circle':
            return <Entypo style={StyleSheet.create(style)} name="facebook-with-circle" size={size} color={color} />
        case 'instagram-circle':
            return <Entypo style={StyleSheet.create(style)} name="instagram-with-circle" size={size} color={color} />
        case 'youtube-circle':
            return <Entypo style={StyleSheet.create(style)} name="youtube-with-circle" size={size} color={color} />

        default:
            return <MaterialIcons style={StyleSheet.create(style)} name="logout" size={size} color={color} />
    }
}

Icons.defaultProps = {
    style: null,
    color: null
}

export default Icons