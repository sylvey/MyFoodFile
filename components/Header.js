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
/* for personal and others*/

const HeaderLeftRightButtonContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 4px;
    align-items: center;
`
// justify-content: center;
const HeaderLeftRightButtonSubContainer = styled(TouchableOpacity)`
    width: 28;
    height: 28;
`
const HeaderLeftRightButtonImage = styled(Image)`
    width: 28;
    height: 28;
    tint-color: #D0A129;
`
const HeaderCenterContainer = styled.View`
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
`
const Title = styled(Text)`
    color: #817F7F;
    font-size: 24;
    font-weight: bold;
    font-family: 'Inter-Black';
`
const HeaderLeftRightBtton = ({src, onPress}) =>{
    return(
        <HeaderLeftRightButtonContainer>
            <HeaderLeftRightButtonSubContainer onPress = {()=>onPress()}>
                <HeaderLeftRightButtonImage source={src}/>
            </HeaderLeftRightButtonSubContainer>
        </HeaderLeftRightButtonContainer>
    )
}

const HeaderCenterTitle = ({title}) =>{
    return(
        <HeaderCenterContainer>
            <Title>{title}</Title>
        </HeaderCenterContainer>
    );
}



/* for home and list*/
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

/*for detail*/
//for logoImage
const HeaderCenterLogoImg = styled(Image)`
    width: 103px;
    height: 68px;
`


const HeaderCenterLogo = ({src}) =>{
    return (
        <HeaderCenterContainer>
            <HeaderCenterLogoImg source = {src}/> 
        </HeaderCenterContainer>
    )
}


export default Header;
export {HeaderBack};
// for personal and others
export {HeaderLeftRightBtton};
export {HeaderCenterTitle};
// for home and list
export {HeaderLeftLogo};
export {SearchBarContainer};
// for detail
export {HeaderCenterLogo};
export {HeaderLeftRightButtonContainer};
export {HeaderLeftRightButtonSubContainer};

