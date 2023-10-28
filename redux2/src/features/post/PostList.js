import React from 'react'
import {useSelector } from "react-redux";
import {selectAllPosts} from "./postSlice";

const PostList = () => {
    // console.log(state.posts);
    // I can't access the state 

    const posts=useSelector(selectAllPosts);
    // that your Redux store has a slice called posts
    // here we selecting the 
    // posts reducers state from the store js
    const renderPosts=posts.map(post=>{

    
        return(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ) })
  return (
    <section>
        <h2>
            Posts
        </h2>
        <div>
        {renderPosts}
        </div>
     
    </section>
    
  )
}

export default PostList