import axios from "axios";

const url = "http://localhost:8000/api";

export default class FormsApi{
    //post method
    async post(i,data){
        try {
         const res = await axios.post(`${url}${i}`, data);
         return res.data;  
         } catch (error) {
         console.log(error);
         return "Error";   
        }
    }
    //get method
     async get(i){
         try {
         const res = await axios.get(`${url}${i}`);
         return res.data;
         } catch (error) {
         console.log(error);
         return "Error";
    }
 }

}