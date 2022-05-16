import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../../../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


// const ProfileBackgroundS = styled(LinearGradient)`
//     margin-top: 20px;
//     border-radius: 18px;
//     width: 90%;
//     align-items: center;
//     justify-content: center;
// `

export const ProfileBackground = ({children})=>{
    return (
        <LinearGradient
        // Background Linear Gradient
          colors={['#FEEFC7CC', 'transparent']}
          style={styles.profileBack}
        >
            {children}
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    profileBack: {
        flex: 1,
        marginTop: 20,
        borderRadius: 18,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export const ProfileImage = styled(Image)`
    width: 125px;
    height: 125px;
    align-self: center;
    margin-top: 20px;
`

export const Name = styled(Text)`
    margin-top: 20px;
    font-weight: 400;
    align-self: center;
    font-size: 22px;
    line-height: 27px;
    color: #000000;
`

export const PersonalDetail = styled(Text)`
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    align-self: center;
    color: #817F7F;
`