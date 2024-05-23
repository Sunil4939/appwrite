import React, { useState, useEffect } from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { connect } from 'react-redux';
import Login from '../screens/login';
import home from '../screens/home';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../component/Icons';
import { COLORS, SIZES } from '../constants';
import { GetUserApi, LogoutApi } from '../redux/actions/authActions';
import { useNetInfo } from '@react-native-community/netinfo';
import signup from '../screens/signup';
import NoInternetBox from '../component/NoInternetBox';
import addBook from '../screens/addBook';

const Stack = createStackNavigator();

const Root = ({ token, LogoutApi, GetUserApi }) => {
    const [internetConnection, setInternetConnection] = useState(true);
    const internetState = useNetInfo();

    useEffect(() => {
        if (internetState.isConnected === false) {
            setInternetConnection(false);
        } else {
            setInternetConnection(true);
        }
    }, [internetState.isConnected]);

    useEffect(() => {
        GetUserApi()
    }, [])

    // token = "null"
    return (
        internetConnection ?
            <>
                <Stack.Navigator
                    screenOptions={() => ({
                        // headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    })}
                >
                    {token === null ?
                        <>
                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="SignUp"
                                component={signup}
                                options={{ headerShown: false }}
                            />
                        </>
                        :
                        <>
                            <Stack.Screen
                                name="Home"
                                component={home}
                                options={{
                                    headerTitleAlign: 'center',
                                    headerRight: () => (
                                        <TouchableOpacity onPress={() => LogoutApi()} style={styles.btn}>
                                            <Icons name={'logout'} size={SIZES.width * .065} color={COLORS.black} />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                            <Stack.Screen
                                name="AddBook"
                                component={addBook}
                            // options={{ headerShown: false }}
                            />
                        </>
                    }

                </Stack.Navigator>


            </>
            :
            <NoInternetBox />

    );
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

const mapDispatchToProps = {
    LogoutApi,
    GetUserApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);


const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },

})