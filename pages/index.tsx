import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ototoclub from '../public/images/ototoclub.png';
import styles from '../styles/Home.module.css';
import Nav from '../components/nav/nav';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ototo Club</title>
        <meta
          name="description"
          content="Ototo Club brings to you LK12. An NFT Project around the 12 Zodiac Signs."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <Nav />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.twitter.com/ototoclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ototo fadsbfh Club © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
};

export default Home;
