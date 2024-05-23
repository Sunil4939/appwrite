import { Client, Databases, ID, Permission, Query, Role, } from "appwrite";
import { GET_ALL_BOOK } from "../types";
import { client } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const databases = new Databases(client);


export const CreateBookDataApi = (data, navigation, cb) => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    console.log("CreateBookDataApi $id : ", userId)
    // $id == userId
    const permissions = [
        // Permission.read(Role.any()), // Public read access
        Permission.write(Role.user(userId)), // Write access for a specific user
        // Permission.delete(Role.user(userId)), // Write access for a specific user
        // Permission.update(Role.user(userId)), // Write access for a specific user
    ];

    cb && cb(true)
    databases.createDocument(
        process.env.DATABASE_ID,
        process.env.COLLECTION_ID,
        ID.unique(),
        data
    )
        .then(async (response) => {
            dispatch(GetBookListApi())
            navigation && navigation.goBack()
            cb && cb(false)
            console.log("AddBookApi res : ", response)
        }).catch((error) => {

            cb && cb(false)
            console.log("AddBookApi error : ", error?.response?.message)
        })
}

export const GetBookListApi = (cb) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    console.log("GetBookListApi userId : ", userId)
    cb && cb(true)
    databases.listDocuments(
        process.env.DATABASE_ID,
        process.env.COLLECTION_ID,
        [Query.equal('uid', userId)]
    )
        .then(async (response) => {
            dispatch({
                type: GET_ALL_BOOK,
                payload: response
            })
            cb && cb(false)
            console.log("GetBookListApi res : ", response)
        }).catch((error) => {
            dispatch({
                type: GET_ALL_BOOK,
                payload: null
            })
            cb && cb(false)
            console.log("GetBookListApi error : ", error?.response?.message)
        })
}

export const UpdateBookDataApi = (data, id, navigation, cb) => async dispatch => {
    cb && cb(true)
    databases.updateDocument(
        process.env.DATABASE_ID,
        process.env.COLLECTION_ID,
        id,
        data
    )
        .then(async (response) => {
            dispatch(GetBookListApi())
            navigation && navigation.goBack()
            cb && cb(false)
            console.log("UpdateBookDataApi res : ", response)
        }).catch((error) => {
            cb && cb(false)
            console.log("UpdateBookDataApi error : ", error?.response?.message)
        })
}

export const DeleteBookDataApi = (id, cb) => async dispatch => {
    cb && cb(true)
    databases.deleteDocument(
        process.env.DATABASE_ID,
        process.env.COLLECTION_ID,
        id
    )
        .then(async (response) => {
            dispatch(GetBookListApi())
            cb && cb(false)
            console.log("DeleteBookDataApi res : ", response)
        }).catch((error) => {
            cb && cb(false)
            console.log("DeleteBookDataApi error : ", error?.response?.message)
        })
}