import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { displaySinglePosts } from '../services/postServices';
import Post from '../Components/Post';
import LoadingScreen from '../Components/LoadingScreen';
import SkeletonLoader from '../Components/SkeletonLoader';

export default function PostDetails() {
  

  const[posts, setPosts] = useState(null);

  const { id } = useParams()


      async function getSinglePost() {
        const response= await displaySinglePosts(id)
        console.log(response);
        if(response.message =="success" ){
          setPosts(response.post);
        }

      } 

      useEffect(() => {
        getSinglePost()
      }, [])

    

  return (

      <div className='mx-auto max-w-3xl pt-5'>
        {posts ? <Post callBack={getSinglePost} posts={posts} /> : <SkeletonLoader /> }
      </div>
  )
}
