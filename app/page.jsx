'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import cards from '@/data/cardapi';

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
    <main>
      {
        dadosAPI ? () : ();
      }
    </main>
  )
}
