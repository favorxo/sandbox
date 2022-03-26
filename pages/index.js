import Head from 'next/head';
import About from '../components/About';
import Book from '../components/Book';
import Features from '../components/Features';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Tours from '../components/Tours';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Popup from '../components/Popup';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popup />
      <Nav />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
    </>
  );
}
