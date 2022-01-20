import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const{id, ...itemPrors} = item;
        return(
            <li key={id} className='list-group-item'>
                <PostListItem {...itemPrors}/>
            </li>
        )
    })
    return(
        <ul className='app-list list-group'>
           {elements}
        </ul>
    )
}

export default PostList;