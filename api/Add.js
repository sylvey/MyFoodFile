import MySheet from "../hardData/MySheet"
import axios from "../api/axios";

export const getMySheet = async(userName) =>{ // 拿到我的表單 .... 我要傳什麼??
    // console.log('here', userName, password);
    if(userName){
        try{
            let res = await axios.post("/getMySheet", {userName});
            console.log('getMy sheet here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res mysheet', res.data);
                return res.data; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    
    return [];
}

export const postCreateFile = async(
    userName, //使用者名稱
    image, //圖片 一個base64的東西
    restaurant, // 餐廳名稱
    food, // 餐點名稱
    price, // 餐點價格
    type, // 類別
    place, // 地點 : { latitude: 25.0100, longitude: 121.3100} 這種格式
    likeVal, // 喜歡程度
    spicyVal, // 辛辣程度
    chosenSheet, // 填完的val [1, 2, 1, 3, 4, 5 .... ]這種長相，要和使用者設定好的sheet做比對
    reminder,
    )=>{
        console.log('post create file', userName, image, restaurant, food, price, type, place, likeVal, spicyVal, chosenSheet, reminder );
        try{
            let res = await axios.post("/postCreateFile", {
                userName, 
                image, 
                restaurant, 
                food, 
                price, 
                type,  // 食物類別 eg 美式, 拉麵, ...
                place,  
                likeVal,  
                spicyVal, 
                chosenSheet, 
                reminder
            });
            console.log('get Post create file here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res create file', res.status);
                return ; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }

        

    return ;
}
