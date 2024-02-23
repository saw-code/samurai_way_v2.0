import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../index';

export const MyPosts: FC<PostsType> = ({posts}) => {

  const postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}
