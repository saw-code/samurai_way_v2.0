import React, {FC} from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../index';

export const Profile: FC<PostsType> = ({posts}) => {

  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts posts={posts}/>
    </div>
  )
}
