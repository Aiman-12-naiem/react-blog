import { useState, useEffect } from 'react';
import PostList from './Post/PostList';
import useFetch from '../useFetch';
const Home = () => {
  const uri = "http://localhost:8000/posts";
  const { error, loading, posts } = useFetch(uri);
  
  return (
    <div className="row">
      <div className="col-md-8">
        { error && <div class="alert alert-danger fade show mt-5" role="alert">
          <strong>{ error }</strong>
        </div> }
        { loading && (<div className="mt-5 text-center">
              <h3>Loading...</h3>
            </div>) }
        { posts && <PostList posts={posts} title="All Posts" /> }
      </div>
    </div>
  );
}
export default Home;


// My Name is Aiman Naiem