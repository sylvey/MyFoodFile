import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../constant/length';
import React from 'react';
import styled from 'styled-components/native';

const headerhight = 117;
const Header = styled.View`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    
    background-color: rgba(255, 255, 255, 0.8);
    border-color: #E0E0E0;
    border-bottom-width: 1.2;
    height: ${headerhight};
    width: ${windowWidth};
`
const HeaderBack = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    
    background-color: transparent;
    border-color: transparent;
    border-bottom-width: 1.2;
    height: ${headerhight};
    width: ${windowWidth};
`
// for personal and others
// justify-content: center;
const HeaderLeftRightButtonContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 4px;
    align-items: center;
`
const HeaderLeftRightButtonSubContainer = styled(TouchableOpacity)`
    width: 28;
    height: 28;
`
const HeaderLeftRightButtonImage = styled(Image)`
    width: 28;
    height: 28;
`
const HeaderCenterContainer = styled.View`
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
`
const HeaderLeftRightBtton = ({src}) =>{
    return(
        <HeaderLeftRightButtonContainer>
            <HeaderLeftRightButtonSubContainer>
                <HeaderLeftRightButtonImage source={src}/>
            </HeaderLeftRightButtonSubContainer>
        </HeaderLeftRightButtonContainer>
    )
}


// for home and list
//for logo
const HeaderLeftContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`
//for logoImage
const HeaderLeftLogoImg = styled(Image)`
    width: 78;
    height: 51;
`
const HeaderLeftLogo = ({src}) =>{
    return (
        <HeaderLeftContainer>
            <HeaderLeftLogoImg source = {src}/> 
        </HeaderLeftContainer>
    )
}
const SearchBarContainer = styled.View`
    flex: 3;
    align-items: center;
    justify-content: center;
    align-items: center;
    height: 51;
`



export default Header;
export {HeaderBack};
// for personal and others
export {HeaderLeftRightBtton};
export {HeaderCenterContainer};
// for home and list
export {HeaderLeftLogo};
export {SearchBarContainer};
