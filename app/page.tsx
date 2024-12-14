// pages/index.tsx

import React from 'react';
import Head from 'next/head';
import styles from './LandingPage.module.cssLandingPage.module.css'; // Optional CSS module for styling
import Mycomponent from './Mycomponent';


const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Landing Page</title>
        <meta name="description" content="A simple landing page built with Next.js and TypeScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Welcome to Our Landing Page</h1>
        <p>Your journey starts here!</p>
        <a href="#get-started" className={styles.button}>Get Started</a>
      </header>

      <main className={styles.main}>
        <section className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>Feature 1: Amazing quality</li>
            <li>Feature 2: User-friendly interface</li>
            <li>Feature 3: 24/7 Support</li>
          </ul>
        </section>

        <section id="get-started" className={styles.getStarted}>
          <h2>Get Started Today!</h2>
          <p>Sign up now and take the first step towards an amazing experience.</p>
          <a href="/signup" className={styles.button}>Sign Up</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
      
      <Mycomponent/>
    </div>
  );
};

export default LandingPage;