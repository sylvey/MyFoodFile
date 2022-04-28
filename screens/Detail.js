import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';


const Detail = ({gid}) =>{
    useEffect(()=>{
      console.log(gid);  
    })
    return (
        <View>
            <Text>{"Detail"}</Text>
        </View>
    )
}

export default Detail;