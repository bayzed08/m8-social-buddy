import React from 'react';


const Comments = (props) => {
    const comments = props.comment;
    const { name, email } = comments;
    return (
        <div>
            <h3> {name}:{email}</h3>
        </div>
    );
};

export default Comments;