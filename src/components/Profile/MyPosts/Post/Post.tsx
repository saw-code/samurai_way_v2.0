import React, {FC} from 'react';
import s from './Post.module.css';

type PostPropsType = {
  message: string
  likesCount: number
}

export const Post: FC<PostPropsType> = ({message, likesCount}) => {
  return (
    <div className={s.post}>
      <img src="https://kartinkof.club/uploads/posts/2022-03/1648387712_2-kartinkof-club-p-mem-dovolnoe-litso-2.png"
           alt="happy face"/>
      <div>{message}</div>
      <div>
        <span>{likesCount}</span>
      </div>
    </div>
  )
}
