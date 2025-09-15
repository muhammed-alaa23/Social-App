import axios from "axios";
import { p, s } from "framer-motion/client";

const API_URL = "https://linked-posts.routemisr.com/";




export async function displayAllPosts(){
    try{
        const { data } = await axios.get(API_URL + "posts", {
            headers : {
                token : localStorage.getItem("token")
            },
            params:{
                page:31,
                
            }
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};





export async function AddPostApi(formData){
    try{
        const { data } = await axios.post(API_URL + "posts", formData, {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};





export async function displaySinglePosts(postId){
    try{
        const { data } = await axios.get(API_URL + "posts/"+ postId , {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};





export async function deletePostApi(postId){
    try{
        const { data } = await axios.delete(API_URL + "posts/"+ postId , {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};



export async function deleteCommentApi(postId){
    try{
        const { data } = await axios.delete(API_URL + "comments/"+ postId , {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};