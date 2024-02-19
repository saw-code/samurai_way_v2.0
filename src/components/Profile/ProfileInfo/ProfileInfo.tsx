import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://traveltimes.ru/wp-content/uploads/2021/07/pattaya-city.jpg" alt="Pattaya"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

