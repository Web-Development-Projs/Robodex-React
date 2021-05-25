import React from 'react';
import styles from './CardList.module.scss';
import Card from './Card/Card';

export default function CardList({ monsters }) {
    return (
        <section className={styles.cardList}>
            {monsters.map(monster => {
                return <Card key={monster.id} monster={monster} />
            })}
        </section>
    );
}
