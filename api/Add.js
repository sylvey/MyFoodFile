import MySheet from "../hardData/MySheet"

export const getMySheet = async() =>{ // 拿到我的表單 .... 我要傳什麼??
    return MySheet;
}

export const postCreateFile = async(
    // userName, //使用者名稱
    image, //圖片 一個base64的東西
    restaurant, // 餐廳名稱
    food, // 餐點名稱
    price, // 餐點價格
    type, // 類別
    place, // 地點 : { latitude: 25.0100, longitude: 121.3100} 這種格式
    likeVal, // 喜歡程度
    spicyVal, // 辛辣程度
    chosenSheet // 填完的val [1, 2, 1, 3, 4, 5 .... ]這種長相，要和使用者設定好的sheet做比對
    )=>{
        console.log('post');
    return true;
}