import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../constant/length';
import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    
    background-color: rgba(255, 255, 255, 0.8);
    border-color: #E0E0E0;
    border-bottom-width: 1.2;
    height: 117;
    width: ${windowWidth};
`
// justify-content: center;
const HeaderLeftRightButtonContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 4px;
    align-items: center;
`
const HeaderCenterContainer = styled.View`
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
`
// background-color: yellow;

const HeaderLeftRightButtonSubContainer = styled(TouchableOpacity)`
    width: 28;
    height: 28;
`

const HeaderLeftRightButtonImage = styled(Image)`
    width: 28;
    height: 28;
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

export default Header;
export {HeaderLeftRightBtton};
export {HeaderCenterContainer};
