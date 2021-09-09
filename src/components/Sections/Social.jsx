import React from 'react';
import Icon from '../UI/Icon';
import css from './Social.module.css';
import { Link } from 'react-router-dom';

export const social = [
  {
    title: 'Facebook',
    icon: 'facebook',
    link: 'http://www.facebook.com',
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    link: 'http://www.instagram.com',
  },
  { title: 'Youtube', icon: 'youtube-play', link: 'http://www.youtube.com' },
];

const Social = () => {
  return (
    <div className={css.social}>
      <div className={css.dash}></div>
      {social.map((s) => (
        <Link key={s.link} target='_blank' rel='noreferrer' to={s.link}>
          <Icon icon={s.icon} />
        </Link>
      ))}
    </div>
  );
};

export default Social;
