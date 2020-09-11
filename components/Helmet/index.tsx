import React from 'react';
import Head from 'next/head'

const Helmet: React.FC = () => {
  return (
    <Head>
    <title>Random Meal Generator</title>
    <meta property="og:title" content="Random Meal Generator" key="title" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet"/>
    </Head>
  );
}

export default Helmet;