import DetailData from "../hardData/DetailData";
import axios from "../api/axios";

export const getDetailDataByGid = async(gid)=>{

    if(gid){
        try{
            let res = await axios.post("/getDetailDataByGid", {gid});
            console.log('get Detail Data here')
            console.log(res.status);
            if(res.status === 200){
                console.log('res Detail data', res.data);
                return res.data; // 驗證過可以
            }
        }
        catch(e){
            console.log('error', e);
        }
        
    }
    return DetailData;
}