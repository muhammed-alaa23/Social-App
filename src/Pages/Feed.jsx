import React, { useContext, useEffect, useRef } from 'react'
import { displayAllPosts } from '../services/postServices'
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LoadingScreen from '../Components/LoadingScreen';
import SkeletonLoader from '../Components/SkeletonLoader';
import Post from '../Components/Post';
import { Link } from 'react-router-dom';
import AddPost from '../Components/AddPost';
import Friends from '../Components/friends';
import Messages from '../Components/Messages';



export default function Feed() {

  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const [posts,setPosts] = useState([])




  


  

    async function displayPosts(){
      setLoading(true)
      const data = await displayAllPosts()
      setLoading(false)
      console.log(data);

      if (data.message=="success"){
        setPosts(data.posts.reverse());
      }
    }

    useEffect(() => {
      displayPosts()
    },[])



  return (


      <div>
        <div className='mx-auto max-w-3xl pt-5'>
          <AddPost displayPosts={displayPosts} />
        </div>
        


      <div className="grid lg:grid-cols-5 px-4 gap-4 mx-auto p-5 relative">


      <div className='lg:col-span-1 col-start-1 '>
                          <Friends  />
                        </div>


        <div className='lg:col-span-3 md:col-start-2 mx-auto'>
            {
        loading ? <SkeletonLoader />  :

        posts.map((posts) => (
          <div key={posts.id}>
            <Post callBack={displayPosts} posts={posts} displayPosts={displayPosts} commentsLimit={1} />
            <Link to={`/post-details/${posts.id}`} className="pt-4 px-8 text-gray-500 text-sm">View all {posts.comments.length} comments</Link>
          </div>
        ))

      }
            </div>


      


      <div className='lg:col-span-1 col-start-5'>
                        <Messages />
                        </div>









      </div>




      </div>

  )
}
