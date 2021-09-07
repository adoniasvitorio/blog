// @flow strict
import React from 'react';
import Contacts from '../../Sidebar/Contacts';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <a
          className={styles['author__bio-twitter']}
          href="/"
          rel="noopener noreferrer"
        >
          <strong>{author.name}</strong>
        </a>
        {author.bio}
      </p>
      <Contacts contacts={author.contacts} />
    </div>
  );
};

export default Author;
