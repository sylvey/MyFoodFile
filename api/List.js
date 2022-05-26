import FoodType from "../hardData/FoodType";
import ListData from "../hardData/ListData";

export const getListData = async (tag, keyword, startDate, endDate) =>{
    return ListData; // 單次回傳 N 個
}

export const getFoodType = async()=>{ // return all foodType
    return FoodType;
}
