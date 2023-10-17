import React from 'react'
import Link from 'next/link'
import styles from '@/components/Header.module.css'
import Image from 'next/image'

function Header() {
  return (
    <div className={styles.header}>
        <div>
        <Image src={'/'} width={58} height={58} ></Image>
        </div>
        <div>
            <Link className={styles.links} href={'/'}>Home</Link>
            <Link className={styles.links} href={''}>Cadastro</Link>
        </div>
    </div>
  )
}

export default Header