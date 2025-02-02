import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ActivityIndicator, SafeAreaView } from "react-native";
import Layout from "./Layout";
import { colors } from "../../utils/colors";
import { Header } from "./SignUp";
import { Button, HStack } from "../../components/Custom";
import { Contact } from "../../utils/assets";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Side1, Side2, Side3, Side4 } from "../../utils/assets";


const ScanDocument2 = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('NG')
    const [country, setCountry] = useState(null)
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(1)
    // const camera = useRef()

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setVisible(!visible)
    }

    const takePicture = async (camera) => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.takePictureAsync(options);
            console.log(data.uri);
            navigation.push('Selfie Verification')
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.cont}>

                {/* <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <ActivityIndicator size={'large'} />;
                        return (
                            <View style={styles.container}>
                                <HStack w='100%' j='space-between' style={{ marginTop: 40 }}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <MaterialIcons name='keyboard-arrow-left' size={30} color={colors.white} />
                                    </TouchableOpacity>
                                    <Header />
                                    <View style={{ width: 30 }} />
                                </HStack>
                                <Text style={styles.signup}>
                                    Scan document
                                </Text>
                                <Text style={styles.email}>
                                    Now hold the phone directly over the passport, when the{"\n"} frame turns blue, take the picture.
                                </Text>

                                <View style={styles.vParent}>
                                   
                                    <View style={styles.viewBox} />
                                   
                                </View>
                                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                                    <View style={styles.capture_1} />
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera> */}
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 323,
        height: 184,
        marginTop: 80
    },
    signup: {
        color: colors.white,
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'ReadexPro-Bold',
        marginTop: 40
    },
    container: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(53, 56, 63, 0.9)',
        height: Dimensions.get('screen').height
        // borderWidth: 1
    },
    email: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        color: colors.white,
        paddingTop: 10,
        textAlign: 'center'
    },

    text: {
        fontFamily: 'Poppins-Regular',
        fontWeight: "400",
        color: colors.text,
        fontSize: 13.5,
        width: '90%'

    },
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 30
    },
    box: {
        display: 'flex',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#D7D9E4',
        height: 80,
        borderRadius: 14,
        marginTop: 80
    },

    text_2: {
        fontFamily: 'Poppins-Regular',
        fontWeight: "400",
        color: colors.text,
        fontSize: 16,
        marginLeft: 7
    },

    skip: {
        fontFamily: "Poppins-SemiBold",
        fontWeight: "500",
        color: colors.primary,
        fontSize: 18,
        marginTop: 20

    },
    container_1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'blue'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.white,
        width: 78,
        height: 78,
        marginTop: 100,
        position: 'absolute',
        bottom: 100
    },
    capture_1: {
        width: 66,
        height: 66,
        borderRadius: 100,
        backgroundColor: colors.white
    },
    cont: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    side: {
        width: 45,
        height: 55,
        marginLeft: -60
    },
    viewBox: {
        width: '90%',
        height: 298,
        borderRadius: 20,
        // backgroundColor: colors.error,
        borderWidth: 1,
        borderColor: colors.white,
        marginTop: 60
    },
    vParent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    }

})

export default ScanDocument2