import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import settings from "../data/settings";

export default function Home() {
  // console.log(JSON.stringify(settings));
  return (
    <>
      <Head>
        <title>Riccardo Sacco</title>
        <meta
          name="description"
          content="Hi, my name is Riccardo Sacco and I'm a full stack developer. Welcome to my website!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 h-full">
          <Sidebar />
        </div>

        <footer></footer>
      </div>
    </>
  );
}
