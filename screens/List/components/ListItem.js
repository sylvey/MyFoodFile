import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { statusBarHeight, windowWidth } from '../../../constant/length';
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled(View)`
    display: flex;
    align-items: center;
    width: 322px;
    height: 125px;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 25px;
`
// border-width: 2px;
// border-color: black;


const Photo = styled(Image)`
    width: 122px;
    height: 122px;
`
const CenterContainer = styled(View)`
    width: 180px;
    height: 122px;
    margin-left: 5px;
`
// background-color: red;
const ListButton = styled(TouchableOpacity)`
    display:flex;
    flex-direction: row;
`


const MoreContainter = styled(View)`
    width: 16px;
    height: 100%;
`
const MoreIcon = styled(Image)`
    width: 15px;
    height: 15px;
`

const DateTime = styled(Text)`
    fontWeight: 500;
    color: #000000;
`
// fontFamily: Inter-Black;
const Title = styled(Text)`
    fontWeight: 500;
    color: #817F7F;
    font-style: normal;
    width: 100%;
`
// color: #343434,

// fontFamily: Inter-Black;

const IconContainer = styled(View)`
    display: flex;
    flex-direction: row;
    height: 25px;
`
const Icon = styled(Image)`
    width: 25px;
    height: 25px;
    margin-right:2px;
`


const ListItem = ({item}, {toDetail})=>{

    
    // const likeString = "../../../assets/like" + item.likeVal.toString() + ".png"
    return(
        <Container>
            <ListButton onPress={()=>toDetail(item.gid)}>
                <Photo source={require('../../../hardData/photoInList.png')}></Photo>
                <CenterContainer>
                    <DateTime>{item.date + " " + item.time}</DateTime>
                    <Title>{item.restaurant}</Title>
                    <Title>{item.food}</Title>
                    <IconContainer>
                        {item.likeVal === 1? <Icon source={require('../../../assets/like1.png')}/>: null}
                        {item.likeVal === 2? <Icon source={require('../../../assets/like2.png')}/>: null}
                        {item.likeVal === 3? <Icon source={require('../../../assets/like3.png')}/>: null}
                        {item.likeVal === 4? <Icon source={require('../../../assets/like4.png')}/>: null}
                        {item.likeVal === 5? <Icon source={require('../../../assets/like5.png')}/>: null}

                        {item.spicyVal === 1? <Icon source={require('../../../assets/Spicy1.png')}/>: null}
                        {item.spicyVal === 2? <Icon source={require('../../../assets/Spicy1.png')}/>: null}
                        {item.spicyVal === 3? <Icon source={require('../../../assets/Spicy3.png')}/>: null}
                        {item.spicyVal === 4? <Icon source={require('../../../assets/Spicy3.png')}/>: null}
                        {item.spicyVal === 5? <Icon source={require('../../../assets/Spicy5.png')}/>: null}

                        {item.reminder? <Icon source={require('../../../assets/reminder.png')}/>: null}

                        {/* <Icon source={require()}/> */}
                    </IconContainer>
                    <Title numberOfLines={1}>
                        {item.linearObjects.map(item=>"#"+item.title+item.value)}
                        {item.stringObjects.map(item=>"#"+item.value)}
                    </Title>
                </CenterContainer>
            </ListButton>
            <MoreContainter>
                <TouchableOpacity>
                    <MoreIcon source={require('../../../assets/more.png')}/>
                </TouchableOpacity>
            </MoreContainter>
        </Container>
    );
}

export default ListItem;