import React from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar({ handleQuery, searchField }) {
    return (
       <input className={styles.search} onChange={handleQuery} value={searchField} type="search" placeholder="search monsters" />
    );
}
