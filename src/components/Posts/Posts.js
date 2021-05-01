import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = (props) => {
    const post = props.post;
    const { id, title, body } = post;

    const history = useHistory();
    const showPostDetails = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }

    return (
        <div className='all-post'>
            <h3>post No:{id}</h3>
            <p> <strong>{title}</strong></p>
            <hr/>
            <p>{body}</p>
            <button onClick={() => showPostDetails(id)} >Details</button>
            <br/>
            <Link to={`/post/${id}`}> <button>click me</button></Link>
        </div>
    );
};

export default Posts;