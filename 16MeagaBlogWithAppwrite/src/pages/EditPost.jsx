import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components/index.js'
import appwriteService from '../appwrite/database.js'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState('');

    const {slug} = useParams();   // taking the slug value from the url of the website
    
    const navigate = useNavigate();

    useEffect(() => {

        if(slug) { 
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post)
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} featuredImage={post.featuredImage}/>
        </Container>
    </div>
  ) : null;
}

export default EditPost
