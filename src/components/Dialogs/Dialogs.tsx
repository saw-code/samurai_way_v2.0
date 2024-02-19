import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
  id: number
  name: string
}

const DialogItem = (props: DialogItemPropsType) => {
  return <div className={`${s.dialog} ${s.active}`}>
    <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  </div>
}

type MessagePropsType = {
  message: string
}

const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'DimOk'},
    {id: 2, name: 'Baranenish'},
    {id: 3, name: 'Temik'},
    {id: 4, name: 'Peppito'},
    {id: 5, name: 'Pavlik'},
  ]

  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'What about Hack?'},
    {id: 1, message: 'Asambler'}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
      </div>
    </div>
  );
};


