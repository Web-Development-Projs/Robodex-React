import React from 'react';
import styles from './Card.module.scss';

export default function Card({ monster }) {
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${monster.id}?set=set2$size=180x180`} alt="monster" />
            <h2> {monster.name} </h2>
            <p> {monster.email} </p>
        </div> 
    );
}
