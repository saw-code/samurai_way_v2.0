import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';


export const Dialogs = () => {
  const dialogs = [
    {id: 1, name: 'DimOk'},
    {id: 2, name: 'Baranenish'},
    {id: 3, name: 'Temik'},
    {id: 4, name: 'Peppito'},
    {id: 5, name: 'Pavlik'},
  ]

  const messages = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'What about Hack?'},
    {id: 1, message: 'Asambler'}
  ]

  const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
  const messagesElements = messages.map(m => <Message message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
