import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SkyCrypt Uptime App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Is SkyCrypt Up?" />
        <p className="description">
         Go check <a target="_blank" rel="noopener noreferrer" href="https://sky.shiiyu.moe/">here</a> dummy
        </p>
      </main>

      <Footer />
    </div>
  )
}
