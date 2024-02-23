import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
  posts: PostType[]
}

type PostType = {
  id: number,
  message: string,
  likesCount: number
}

const posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: '\'Its my first post\'', likesCount: 11},
]

ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);