import React from 'react';
import styles from './cards.module.css'; // Импортируем стили
import cards from '../../db';

interface Card {
  id: number;
  title: string;
  image: string; // Add an 'image' property to the interface
  // Add other properties for your card
}

interface GalleryProps {
  cards?: Card[];
}

const Cards: React.FC<GalleryProps> = () => (
  <div className={styles.gallery}>
    {cards?.map((card) => (
      <div key={card.id} className={styles.card}>
        <img src={card.image} alt={card.title} />
        <h2>{card.title}</h2>
        {/* Add other content for your card */}
      </div>
    ))}
  </div>
);

export default Cards;
