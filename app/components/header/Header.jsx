import React from 'react'
import Link from 'next/link'
import styles from '@/app/components/header/Header.module.css'
import Image from 'next/image'

function Header() {
  return (
    <div className={styles.header}>
        <div>
        <Image src={'/coroa.png'} width={65} height={65} ></Image>
        </div>
        <div>
            <Link className={styles.links} href={'/'}>Home</Link>
            <Link className={styles.links} href={''}>Cadastro</Link>
        </div>
    </div>
  )
}

export default Header