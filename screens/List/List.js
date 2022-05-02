import React, {useState, useEffect} from 'react';
import { Text,View, StyleSheet } from 'react-native';
import Header, { HeaderBack, HeaderLeftLogo, SearchBarContainer } from '../../components/Header';
import { Background, Scroll } from '../../components/Screens';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from "../../components/SearchBar";
import { getListData } from '../../api/List';
import * as Progress from 'react-native-progress';
import ListItem from './components/ListItem';


const List = () =>{
    const [listData, setListData] = useState([]);
    const [tag, setTag] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const fetchNewData = async ()=>{
        setIsLoading(true);
        const newData = await getListData(tag, keyword);
        setListData([...listData, ...newData]);
        console.log(newData);
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
        console.log('useEffect');
        await fetchNewData();
        
    },[])

    return (
        <Background>
            <Scroll contentContainerStyle = {styles.center}>
                <HeaderBack></HeaderBack>
                <FlatList
                    data={listData}
                    contentContainerStyle = {{...styles.center, ...styles.contentContainer}}
                    style={styles.listContainer}
                    // onEndReached ={fetchNewData}
                    renderItem={ListItem}
                    ListFooterComponent={loader}
                    keyExtractor={item=>item.gid}
                ></FlatList>
            </Scroll>
            <Header>
                <HeaderLeftLogo src={require("../../assets/homeLogo.png")}></HeaderLeftLogo>
                <SearchBarContainer><SearchBar/></SearchBarContainer>
            </Header>
        </Background>
    )
}

export default List;

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    listContainer:{
        width: "95%",
        // backgroundColor: 'yellow'
    },
    contentContainer:{
        // marginTop: '5px',
    }
})