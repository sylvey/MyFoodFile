import DailyData from "../hardData/DailyData"
import axios from "../api/axios";

export const getDailyData = async (userName, keyword, startDay, endDay) =>{
    console.log('get DailyData', userName, keyword, startDay, endDay);
    if(userName && startDay && endDay){
        try{
            let res = await axios.post("/getDailyData", {userName, foodKeyword: keyword, startDay, endDay});
            console.log('get DailyData here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res DailyData', res.data);
                return res.data; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    
    return DailyData; // 單次回傳 N 個
}

