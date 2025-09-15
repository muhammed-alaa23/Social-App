import axios from "axios";

const API_URL = "https://linked-posts.routemisr.com/";



export async function addComments({commentContent, postId}){
    try{
        const { data } = await axios.post(API_URL + "comments",{
            content: commentContent,
            post: postId
        }, {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};



export async function UpdateCommentApi(commentId, commentContent){
    try{
        const { data } = await axios.put(API_URL + "comments/"+ commentId , {
            content: commentContent
        }, {
            headers : {
                token : localStorage.getItem("token")
            },
        })
        return data;
    }catch (error) {
        return error.response ? error.response.data.error : error.message;
    }
};