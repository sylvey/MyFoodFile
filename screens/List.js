import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import Header, { HeaderBack, HeaderLeftLogo, SearchBarContainer } from '../components/Header';
import { Background, Scroll } from '../components/Screens';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from "../components/SearchBar";
import { getListData } from '../api/List';
import * as Progress from 'react-native-progress';


const List = () =>{
    const [listData, setListData] = useState([]);
    const [tag, setTag] = useState('');

    const fetchNewData = async ()=>{
        setIsLoading(true);
        const newData = await getListData(tag);
        setDailyData([...dailyData, ...newData]);
        
    }

    const loader = ()=>{
        return <>
        {
            isLoading? 
                <Progress.Circle size={30} indeterminate={true}></Progress.Circle>
            : 
                <></>
        }</>
    }

    useEffect(async()=>{
        await fetchNewData();
    },[])

    return (
        <Background>
            <Scroll>
                <HeaderBack></HeaderBack>
                
            </Scroll>
            <Header>
                <HeaderLeftLogo src={require("../assets/homeLogo.png")}></HeaderLeftLogo>
                <SearchBarContainer><SearchBar/></SearchBarContainer>
            </Header>
        </Background>
    )
}

export default List;