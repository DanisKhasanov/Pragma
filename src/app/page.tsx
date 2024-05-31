'use client'
import Link from 'next/link';
import styles from './page.module.css';
import RootLayout from './layout';

export default function Home() {
  return (
  <RootLayout >
    <div className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta numquam iure, maxime consequatur fugit nam minus suscipit exercitationem totam tempore praesentium hic id temporibus sapiente corporis eligendi molestias iusto.</div>
    </RootLayout>
  );
}