import { ID, Account, Client } from 'appwrite';
import { RNToasty } from 'react-native-toasty';
import { AUTH_TOKEN, USER_DATA } from '../types';
import { client } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


const account = new Account(client)

export const GetUserApi = (cb) => async dispatch => {
  cb && cb(true)
  account.get()
    .then(async (response) => {
      dispatch({
        type: USER_DATA,
        payload: response
      })
      cb && cb(false)
      // console.log("user detail : ", response)
    }).catch((error) => {
      dispatch({
        type: USER_DATA,
        payload: null
      })
      cb && cb(false)
      // console.log("user detail error : ", error?.response?.message)
    })
}

export const LogoutApi = (cb) => async dispatch => {
  cb && cb(true)
  account.deleteSession('current')
    .then(async (response) => {
      cb && cb(false)
      await AsyncStorage.clear()
      dispatch({
        type: AUTH_TOKEN,
        payload: null
      })
      dispatch({
        type: USER_DATA,
        payload: null
      })
      console.log("user logout : ", response)
    }).catch((error) => {
      // dispatch({
      //   type: USER_DATA,
      //   payload: null
      // })
      cb && cb(false)
      console.log("user logout error : ", error?.response?.message)
    })
}

export const LoginApi = (value, cb) => async dispatch =>{
  cb && cb(true)
  account.createEmailPasswordSession(
    value.email,
    value.password,
  ).then(async (response) => {
    // getUser()
    // RNToasty.Success({
    //   title: 'Login Successfully',
    //   position: 'top'
    // })
    dispatch({
      type: AUTH_TOKEN,
      payload: response?.$id
    })
    dispatch({
      type: USER_DATA,
      payload: response
    })
    await AsyncStorage.setItem("@USER_ID", response?.$id)
    cb && cb(false)
    console.log("user login : ", response)
  }).catch((error) => {
    RNToasty.Error({
      title: 'Login error',
      position: 'top'
    })
    dispatch({
      type: USER_DATA,
      payload: null
    })
    cb && cb(false)
    console.log("user login error : ", error?.response?.message)
  })
}

export const createAccountApi = (value, cb) => async dispatch => {
  cb && cb(true)
  account.create(
    ID.unique(),
    value.email,
    value.password,
    value.name
  ).then(async (response) => {
    // RNToasty.Success({
    //   title: 'Account Created Successfully',
    //   position: 'top'
    // })
    dispatch({
      type: AUTH_TOKEN,
      payload: response?.$id
    })
    dispatch({
      type: USER_DATA,
      payload: response
    })
    await AsyncStorage.setItem("@USER_ID", response?.$id)
    cb && cb(false)
    console.log("user created : ", response)
  }).catch((error) => {
    dispatch({
      type: USER_DATA,
      payload: null
    })
    cb && cb(false)
    RNToasty.Error({
      title: 'Already Exist',
      position: 'top'
    })
    console.log("user create error : ", error?.response?.message)
  })
}

