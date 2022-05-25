import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../../../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';



export const Row = styled(View)`
    display: flex;
    flex: 3;
    align-items: center;
    align-self: center;
    justify-content: center;
    flex-direction: row;
    margin-vertical: 3px;
    width: 85%;
`
// background-color: red;

const PhotoUploadButton = styled(TouchableOpacity)`
    flex: 1;
    align-items: center;
    margin: 15px;
    width: 114px;
    height: 121px;
`

const PhotoUploadImage = styled(Image)`
    width: 114px;
    height: 121px;
`

export const UploadingPhotoButton = ({camera, photo, image})=>{
    return (
        <Row>{
            image?
            <Image source={{uri: image}} style={{width: 310, height:310}}></Image>
            :
            <>
            <PhotoUploadButton onPress = {()=>camera()}>
                <PhotoUploadImage source={require("../../../assets/camera.png")}/>
            </PhotoUploadButton>
            <PhotoUploadButton onPress = {()=>photo()}>
                <PhotoUploadImage source={require("../../../assets/uploadPhoto.png")}/>
            </PhotoUploadButton>
            </>
            }
        </Row>
    )
}


const FixedTitleUp = styled(Text)`
    color: #4D4B4B;
    font-size: 20px;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex: 2;
`

const FixedInputUp = styled(TextInput)`
    color: #4D4B4B;
    font-size: 18px;
    border-bottom-width: 1px;
    border-bottom-color: #4D4B4B;
    flex: 3;
    margin-right: 20px;
`

const FixedInputUpEmpty = styled(View)`
    color: #4D4B4B;
    font-size: 18px;
    flex: 3;
    margin-right: 20px;
`

export const InputTextUp = ({title, value, onChange})=>{
    return (
        <Row>
            <FixedTitleUp>{title}</FixedTitleUp>
            <FixedInputUp selectionColor={'#4D4B4B'} value={value} onChangeText={(text)=>onChange(text)}></FixedInputUp>
        </Row>
    )
}

const FixedTitleSelf = styled(Text)`
    color: #BC8D14;
    font-size: 22px;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex: 2;
`

const FixedTitleDown = styled(Text)`
    color: #4D4B4B;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    text-align: left;
    flex: 2;
`

const FixedTitleSamll = styled(Text)`
    color: #4D4B4B;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: left;
    flex: 2;
`


export const Title = ({title})=>{
    return(
        <Row>
            <FixedTitleDown>{title}</FixedTitleDown>
            <FixedInputUpEmpty></FixedInputUpEmpty>
        </Row> 
    )
}
export const SmallTitle = ({title})=>{
    return(
        <Row>
            <FixedTitleSamll>{title}</FixedTitleSamll>
            <FixedInputUpEmpty></FixedInputUpEmpty>
        </Row> 
    )
}

const TitleSelf = ({title})=>{
    return(
        <Row>
            <FixedTitleSelf>{title}</FixedTitleSelf>
            <FixedInputUpEmpty></FixedInputUpEmpty>
        </Row> 
    )
}

const ValueContainer = styled(View)`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-vertical: 3px;
`
const LeftRightContainer = styled(View)`
    flex: 1;
    height: 30px;
`
const CenterContainer = styled(View)`
    flex: 4;
    flex-direction: row;
    height: 30px;
`
const SideText = styled(Text)`
    color: #616161;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 2;
`
export const SideImageContainer = styled(View)`
    color: #616161;
    font-size: 16px;
    align-items: center;
    text-align: center;
    flex: 2;
`

export const SideImage = styled(Image)`
    width: 24px;
    height: 24px;
`

const CircleButton = styled(TouchableOpacity)`
    height: 24px;
`
const CircleImage = styled(Image)`
    width: 24px;
    height: 24px;
`


const RadioButton = ({check, style, setValue, value})=>{
    // console.log('gid', gid);
    return (
        <CircleButton style = {{...style}} onPress = {()=>setValue(value)}>
            <CircleImage source = {check? require("../../../assets/RadioCheck.png"): require("../../../assets/RadioUncheck.png")}/>
        </CircleButton>
    )
}

const BooleanButton = ({check, style, setValue, value})=>{
    return (
        <CircleButton style = {{...style}} onPress = {()=>setValue(value)}>
            <CircleImage source = {check? require("../../../assets/booleanCheck.png"): require("../../../assets/booleanUncheck.png")}/>
        </CircleButton>
    )
}

export const ValueInput = ({title, selfDefinition, type, sideType, left, right, value, setValue}) =>{
    return(
        <>
        {
            selfDefinition? <TitleSelf title={title}></TitleSelf>:<Title title={title}></Title>
        }
        <Row>
            <ValueContainer>
                <LeftRightContainer>
                    {
                        sideType === "text" ? 
                            <SideText>{left}</SideText>
                        : null 
                    } 
                    {
                        sideType === "image" ? 
                        <SideImageContainer>
                            <SideImage source = {left}/>
                        </SideImageContainer>
                        : null 
                    } 
                </LeftRightContainer>
                <CenterContainer>
                    {
                        type === "3choices"? 
                            <>
                            <RadioButton check={1===value} setValue={setValue} value = {1} style={{flex: 1, }}/>
                            <RadioButton check={2===value} setValue={setValue} value = {2} style={{flex: 1, alignItems: 'center'}}/>
                            <RadioButton check={3===value} setValue={setValue} value = {3} style={{flex: 1, alignItems: 'flex-end'}}/>
                            </>
                        :null
                    }
                    {
                        type === "5choices"?
                            <>
                            <RadioButton check={1===value} setValue={setValue} value = {1} style={{width: 24}}/>
                            <RadioButton check={2===value} setValue={setValue} value = {2} style={{flex: 1, alignItems: 'center', }}/>
                            <RadioButton check={3===value} setValue={setValue} value = {3} style={{alignItems: 'center', width: 24}}/>
                            <RadioButton check={4===value} setValue={setValue} value = {4} style={{flex: 1, alignItems: 'center', }}/>
                            <RadioButton check={5===value} setValue={setValue} value = {5} style={{width: 24}}/>
                            </>
                        :null
                    }
                    {
                        type === "2choices"?
                        <>
                            <BooleanButton check={1===value} setValue={setValue} value = {1} style={{flex: 1, alignItems: 'center',}}/>
                            <BooleanButton check={2===value} setValue={setValue} value = {2} style={{flex: 1, alignItems: 'center', }}/>
                        </>
                        :null
                    }

                </CenterContainer>
                <LeftRightContainer>
                    {
                        sideType === "text" ? 
                            <SideText>{right}</SideText>
                        : null 
                    } 
                    {
                        sideType === "image" ? 
                        <SideImageContainer>
                            <SideImage source = {right}/>
                        </SideImageContainer>
                        : null 
                    } 
                </LeftRightContainer>
            </ValueContainer>
        </Row>
        </>
    )
}