import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Banner from "@components/Banner";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Code the North</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <main>
        <Header title="Mission Statement" />
        <hr />
        <p className="description">
          Code the North is a non-profit organization that aims to provide funds
          for local charities in our communities and empower youth to pursue
          future-proof careers in blue and white collar jobs.{<br />} {<br />}
          Currently, we are an independant unregistered organization working on our initial business plan. This site and future plans are currently a work in progress.
        </p>
      </main>
      <Footer />
    </div>
  );
}
