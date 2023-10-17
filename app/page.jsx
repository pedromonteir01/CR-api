'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import cards from '@/data/cardapi';
import Card from './components/cards/Cards';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function Home() {

  const [dadosAPI, setDadosAPI] = useState('');

  useEffect(() => {
    const cardsFetch = async () => {
      try {
        const data = await cards();
        setDadosAPI(data);
      } catch (error) {
        throw error;
      }
    };
    cardsFetch();
  }, []);

  return (
    <div>
      <Header/>
      <main className={styles.container}>
      {
        dadosAPI ? (
          dadosAPI.map((card) =>
            card.name == 'Super Magic Archer' || card.name == 'Super Ice Golem' || card.name == 'Super Mini P.E.K.K.A' ? (
              null
            ) :
          (
            <Card name={card.name} image={card.iconUrls.medium} lvl={card.maxLevel}/>  
          ))
        ) : (
          <p>carregando...</p>
        )
      }
      </main>
      <Footer/>
    </div>
  )
}
