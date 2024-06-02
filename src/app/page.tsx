'use client';
import styles from './page.module.scss';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <div className={styles['container']}>
        <p className={styles['text']}>Добро пожаловать в текстовый проект</p>
      </div>
    </RootLayout>
  );
}
