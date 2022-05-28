import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

const TagContainer = styled(TouchableOpacity)`
    background-color: #FFFFFF;
    border: 1px solid #B1B1B1;
    border-radius: 15px;
    height: 32px;
    align-items: center;
    justify-content: center;
    padding-horizontal: 4px;
    margin-horizontal: 8px;
`
// margin: 8px;

const TagText = styled(Text)`
    color: #2E2D2D;
    font-size: 15px;
`

const TagContainerChosen = styled(TouchableOpacity)`
    background-color: #F09F55;
    border: 1px solid #B1B1B1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    height: 32px;
    align-items: center;
    justify-content: center;
    padding-horizontal: 4px;
    margin-horizontal: 8px;
`

const TagTextChosen = styled(Text)`
    color: #FFFFFF;
    font-size: 15px;
`

export const Tag = ({item}, {chosen, setTag}) =>{
    // console.log("in tag:", item);
    return (
        <>
        {
            chosen?
            <TagContainerChosen>
                <TagTextChosen>{item.title}</TagTextChosen>
            </TagContainerChosen>
            :
            <TagContainer onPress = {()=>setTag(item.title)}>
                <TagText>{item.title}</TagText>
            </TagContainer>
        }
        </>  
    )
}




const TagsScrollContainer = styled(ScrollView)`
    position: absolute;
    display: flex;
    height: 40px;
    width: 100%;
    top: 117px;
    padding: 8px;
`

const TagsScrollContainerFix = styled(ScrollView)`
    flex: 1;
`

export const ScrollTagsFix = ({foodType, setTag}) =>{
    return (
        <TagsScrollContainerFix contentContainerStyle={{display: 'flex', justifyContent: 'center'}}>
            <FlatList
              data={foodType}
              contentContainerStyle={styles.listRowContainer}
              horizontal={ true }
              renderItem={(item)=>Tag(item, { chosen: false, setTag: setTag})}
              keyExtractor={item => item.gid}
            />
        </TagsScrollContainerFix>
    )
}

export const ScrollTags = ({foodType, tag, setTag}) =>{
    return (
        <TagsScrollContainer>
            <FlatList
              data={foodType}
              contentContainerStyle={styles.listRowContainer}
              horizontal={ true }
              renderItem={(item)=>Tag(item, { chosen: item.item.title === tag, setTag})}
              keyExtractor={item => item.gid}
            />
        </TagsScrollContainer>
    )
}

export const ScrollTagsBack = styled(View)`
    display: flex;
    height: 40px;
    width: 100px;
`
const styles = StyleSheet.create({
    listRowContainer: {
        alignItems:'center', 
        justifyContent: 'center'
    }
})