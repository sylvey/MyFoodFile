import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #FEEFC7;
    height: 30;
    width: 90%;
    border-radius: 5;
    align-items: center;
`
const SearchIcon = styled(Image)`
    height:20;
    width:20;
    margin-left: 5;
`
export const SearchInput = styled(TextInput)`
    display: flex;
    flex: 1;
    height: 20;
    margin-left:5;
`



const SearchBar = ({value, onChangeText}) =>{
    return (
        <Container>
            <SearchIcon source={require("../assets/search.png")}></SearchIcon>
            <SearchInput 
                value = {value} 
                onChangeText={(text)=>onChangeText(text)} 
                selectionColor={'#F16719'} 
                placeholder={"search for food file"}></SearchInput>
        </Container>
    )
}

export default SearchBar;