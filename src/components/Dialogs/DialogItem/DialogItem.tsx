import React, {FC} from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
  id: number
  name: string
}

export const DialogItem: FC<DialogItemPropsType> = ({id, name}) => {
  return <div className={`${s.dialog} ${s.active}`}>
    <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
  </div>
}
