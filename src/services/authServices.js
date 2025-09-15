import axios from "axios";

const API_URL = "https://linked-posts.routemisr.com/";


export async function registerApi(userData){
    try{
        const { data } = await axios.post(API_URL + "users/signup", userData);
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};

export async function loginApi(userData){
    try{
        const { data } = await axios.post(API_URL + "users/signin", userData);
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};


export async function getUserDataApi(userData){
    try{
        const { data } = await axios.get(API_URL + "users/profile-data", {
            headers : {
                token : localStorage.getItem("token")
            },
        });
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};
