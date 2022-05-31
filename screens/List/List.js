import React, {useState, useEffect} from 'react';
import { Text,View, StyleSheet } from 'react-native';
import Header, { HeaderBack, HeaderLeftLogo, SearchBarContainer } from '../../components/Header';
import { Background, Scroll } from '../../components/Screens';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from "../../components/SearchBar";
import { getFoodType, getListData } from '../../api/List';
import * as Progress from 'react-native-progress';
import ListItem from './components/ListItem';
import { ScrollTags, ScrollTagsBack, Tag } from '../../components/Tags';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import { AsyncStorage } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

const List = (props) =>{
    const isFocused = useIsFocused();

    const [listData, setListData] = useState([]);
    const [tag, setTag] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [foodType, setFoodType] = useState([]);

    const navigation = useNavigation();

    const toDetail = (gid) =>{
        console.log('toDetail', gid);
        navigation.navigate('Detail', gid);
    }

    const fetchNewData = async ()=>{
        setIsLoading(true);
        const userName = await AsyncStorage.getItem('@userName');

        let endDay = moment().format("MMM DD");
        console.log(endDay);
        let startDay = moment().subtract(10, 'days').format("MMM DD");
        console.log(startDay);

        const newData = await getListData(userName, tag, keyword, startDay, endDay);
        setListData([...newData]);
        console.log("new data: ",newData);
        // setIsLoading(false);
    }

    const fetchFoodType = async ()=>{
        const newData = await getFoodType();
        setFoodType(newData);
        console.log("tags", newData);
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
        await fetchFoodType();
        setTimeout(async()=>{
            await fetchNewData();
        }, 3000);
        setIsLoading(false);
    },[props, isFocused])

    return (
        <Background>
            <Scroll contentContainerStyle = {styles.center}>
                <HeaderBack></HeaderBack>
                <ScrollTagsBack></ScrollTagsBack>
                <FlatList
                    data={listData}
                    contentContainerStyle = {{...styles.center, ...styles.contentContainer}}
                    style={styles.listContainer}
                    // onEndReached ={fetchNewData}
                    renderItem={(item)=>ListItem(item,{toDetail: toDetail})}
                    ListFooterComponent={loader}
                    keyExtractor={item=>item.gid}
                ></FlatList>
            </Scroll>
            <Header>
                <HeaderLeftLogo src={require("../../assets/homeLogo.png")}></HeaderLeftLogo>
                <SearchBarContainer><SearchBar/></SearchBarContainer>
            </Header>
            <ScrollTags 
                foodType={foodType !== []? foodType: []} 
                tag = {tag}
                setTag = {setTag}    
            ></ScrollTags>
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