import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ototoclub from "../public/images/ototoclub.png";
import styles from "../styles/Home.module.css";
import { Button, Text } from "@chakra-ui/react";

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

      <main className={styles.main}>
        <Image
          src={ototoclub}
          alt="Ototo Club"
        />
        <h1 className={styles.title}>Coming Soon</h1>
      </main>

      <div>Hello</div>

			<Button variant="primary"><Text fontWeight="bold">JOIN DISCORD</Text></Button>


			<Text fontWeight="bold" fontFamily="Karla">HELLO WORLD</Text>
			<Text >HELLO WORLD</Text>

			<div
        style={{
          width: "350px",
          height: "350px",
          padding: "20px",
          backgroundColor: "black",
        }}
      >
        <Button variant="outlined">HELLO</Button>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://www.twitter.com/ototoclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ototo Club © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
};

export default Home;
