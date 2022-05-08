import FoodType from "../hardData/FoodType";
import ListData from "../hardData/ListData";

export const getListData = async (tag, keyword) =>{
    return ListData; // 單次回傳 N 個
}

export const getFoodType = async(searchWord)=>{ // searchword == "" return all foodType
    return FoodType;
}