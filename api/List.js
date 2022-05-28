import FoodType from "../hardData/FoodType";
import ListData from "../hardData/ListData";
import axios from "../api/axios";

export const getListData = async (userName, tag, keyword, startDay, endDay) =>{
    console.log('get List Data', userName, tag, keyword, startDay, endDay);
    if(userName && startDay && endDay){
        try{
            let res = await axios.post("/getListData", {userName, tag, foodKeyword: keyword, startDay, endDay});
            console.log('get ListData here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res List data', res.data);
                return res.data; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    return ListData; // 單次回傳 N 個
}

export const getFoodType = async()=>{ // return all foodType
    try{
        let res = await axios.post("/getfoodType");
        console.log('get foodtype here')
        console.log(res.status);
        if(res.status === 200){
            console.log('res foodtype', res.data);
            return res.data; // 驗證過可以
        }
    }
    catch(e){
        console.log('error', e);
    }
        
    
    return FoodType;
}
