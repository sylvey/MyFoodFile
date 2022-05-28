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


const List = () =>{
    const [listData, setListData] = useState([]);
    const [tag, setTag] = useState('1');
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

        let startDay = moment().format("MMM DD");
        console.log(startDay);
        let endDay = moment().subtract(10, 'days').format("MMM DD");
        console.log(endDay);

        const newData = await getListData(tag, keyword, startDay, endDay);
        setListData([...listData, ...newData]);
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
        await fetchNewData();
        await fetchFoodType();
        setIsLoading(false);
    },[])

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