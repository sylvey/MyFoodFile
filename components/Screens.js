import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../constant/length';
import React from 'react';
import styled from 'styled-components/native';



const Background = styled(SafeAreaView)`
    background-color: #FFFFFF;
`

const Scroll = styled(ScrollView)`
    height: 100%;
    width: 100%;
    overflow: scroll;
`


export {Background};
export {Scroll};

