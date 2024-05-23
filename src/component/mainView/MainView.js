import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { COLORS, SIZES, images } from '../../constants'
import { useRoute } from '@react-navigation/native'
import Loader from '../loading/Loader'

const MainView = ({ scroll, bg, children, loading, modalLoading, showHeader, showFooter, renderHeader, renderFooter, statusBarBg }) => {
    // console.log("renderBottomOuterComponent : ", renderBottomOuterComponent);
    const route = useRoute()
    // console.log("mainview route : ", route);
    return (
        <SafeAreaView style={[styles.container, bg && { backgroundColor: bg }]}>
            {statusBarBg == COLORS.transparent ?
                <StatusBar translucent={true} backgroundColor={COLORS.transparent} barStyle='light-content' />
                :
                <StatusBar backgroundColor={statusBarBg} barStyle={statusBarBg == COLORS.white ? 'dark-content' : 'light-content'} />
            }
            {modalLoading && <Loader
                visible={true} // boolean *
                indicatorColor={COLORS.primary} // color 
                loadingTextStyle={{ color: 'black' }} // Loading Text Style
                backgroundColor={"white"} // modal background color
            />}

            {showHeader && renderHeader}

            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={SIZES.width * .12} color={COLORS.primary} />
                    {/* <Image source={images.server_error} style={styles.image} /> */}
                </View>
                :
                <>
                    {route?.params?.status == 500 ?
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images.server_error} style={styles.server_error} />
                        </View>
                        :
                        <>
                            <View style={{ flex: 1, }}>
                                {scroll ?
                                    <ScrollView
                                        keyboardShouldPersistTaps={'handled'}
                                        showsVerticalScrollIndicator={false}>
                                        {children}
                                    </ScrollView>
                                    :
                                    <>
                                        {children}
                                    </>
                                }
                            </View>
                        </>
                    }
                </>
                // <View style={{ flex: 1, }}>
                //     {scroll ?
                //            <KeyboardAwareScrollView 
                //            keyboardShouldPersistTaps={'handled'}
                //            showsVerticalScrollIndicator={false}>
                //            {children}
                //        </KeyboardAwareScrollView>
                //         :
                //         <>
                //             {children}
                //         </>
                //     }
                // </View>
            }

            {showFooter && renderFooter}
        </SafeAreaView>
    )
}

MainView.defaultProps = {
    scroll: false,
    loading: false,
    modalLoading: false,
    children: '',
    renderTopOuterComponent: null,
    renderBottomOuterComponent: null,
    statusBarBg: COLORS.white,
    showFooter: true,
    showHeader: true,
}
export default MainView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    server_error: {
        width: SIZES.width * .8,
        height: SIZES.height * .3,
        resizeMode: 'contain'
    },
    image: {
        width: SIZES.width * .8,
        height: SIZES.height * .3,
        resizeMode: 'contain'
    },
    loading: {
        width: SIZES.width * .18,
        height: SIZES.width * .18,
        alignSelf: 'center',
        // tintColor: COLORS.primary,
    }
})