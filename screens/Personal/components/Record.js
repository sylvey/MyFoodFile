import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../../../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


export const RecordBlock = styled(View)`
    margin-top: 20px;
    width: 90%;
    border: 1px solid rgba(208, 161, 41, 0.6);
    border-radius: 18px;
`

export const RecordTabContainer = styled(View)`
    height: 35px;
    flex-direction: row;
`

const TitleUnselected = styled(Text)`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const RecordTabUnselected = styled(TouchableOpacity)`
    flex: 1
    background: #FFFFFF;
    border: 1px solid #D0A129;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
`

const TitleSelected = styled(Text)`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`

const RecordTabSelected = styled(TouchableOpacity)`
    flex: 1
    background: #F09F55;
    border: 1px solid #D0A129;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    align-items: center;
    justify-content: center;
`

export const RecordTab = ({title, onPress, chosen}) =>{
    return (
        <>
        {
            chosen?
            <RecordTabSelected onPress = {()=>onPress()}>
                <TitleSelected>{title}</TitleSelected>
            </RecordTabSelected>
        :
            <RecordTabUnselected onPress = {()=>onPress()}>
                <TitleUnselected>{title}</TitleUnselected>
            </RecordTabUnselected>
        }
        </>
    )
}