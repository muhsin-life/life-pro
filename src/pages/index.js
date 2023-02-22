import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ data, brands_data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={data} brands_data={brands_data}>
        <main className={styles.main}>
        </main>
      </Layout>

    </>
  )
}

export async function getServerSideProps(){
  const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
  const data = await res.json();

  const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
  const brands_data = await brands_res.json();
  return{
    props:{
      data,
      brands_data
    }
  }
}
