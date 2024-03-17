import React, {useEffect, useState} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/database'
import {useSelector} from 'react-redux'


function Home() {

    const authStatus = useSelector((state) => state.auth.status)
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts()
        .then((posts) => {
            if(posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

    if(!authStatus){

        if(posts.length === 0){
            return (
                <div className='w-full py-8 mt-4 text-center'>
                    <Container>
                        <div className='flex flex-wrap'>
    
                        <div className='py-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
    
                        </div>
                        
                    </Container>
                </div>
            )
        }


    } else {
        if(posts.length === 0){
            return (
                <div className='w-full py-8 mt-4 text-center'>
                    <Container>
                        <div className='flex flex-wrap'>
    
                        <div className='py-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Add posts to see posts
                            </h1>
                        </div>
    
                        </div>
                        
                    </Container>
                </div>
            )
        }
    }

   

   

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
