import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data)
             })
    }, [postId]);
    //const { id, userId, title, body } = post;

    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`;
        fetch(url2)
            .then(res => res.json())
        .then(data=>setComment(data))
    }, [postId]);


    //console.log(post);
    return (
        <div>
            <h3>This is post Details</h3>
            <h2>user ID: {post.userId}</h2>
            <p>Post No: <strong>{post.id}</strong> </p>
            <p>{post.body}</p>
            <Link to="/home"><button>Go to main page</button></Link>
            <hr />
            <h2>Total Comments: {comments.length}</h2>
             {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }

        </div>
    );
};

export default PostDetail;