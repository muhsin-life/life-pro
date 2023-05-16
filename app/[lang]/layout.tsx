import '../styles/globals.css'

import AuthContext from "../components/AuthContext"
import Layout from "../components/layout"
import getBrandsData from "./lib/getBrandsData"
import getCategoryData from "./lib/getCategoryData"
import getSessionData from "./lib/getSessionData"
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'
import { getDictionary } from './dictionaries'
import { ProductsPage } from '../components/products-page'
import { Provider } from 'react-redux'; 
import store from '../redux/store'
// export const dynamic = 'force-static'


// const languages = ['ae-en', 'ae-ar', 'sa-en', 'sa-ar']

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

export default async function RootLayout({ children, params: { lang } }) {
  if (lang === "home") {
    redirect('/ae-en/home')
  }
  const data = await getCategoryData(lang)
  
  const brands_data = await getBrandsData()

  // const session = await getSessionData(headers().get('cookie') ?? '')
  const session = null
  // const session = await getServerSession(authOptions)
  const parts = lang?.split("-");

  const langData = await getDictionary(parts[1]);

  var isArabic = false

  function dirGenerate(lang) {
    if (lang === 'ae-ar' || lang === 'sa-ar') {
      isArabic = true
      return 'rtl'
    }
    return 'ltl'
  }

  return (
    <div lang="en" dir={dirGenerate(lang)}>
      <AuthContext>
        <Layout data={data} brands_data={brands_data} sessionServ={session} isArabic={isArabic} lang={lang} langData={langData}>
          {children}
        </Layout>
      </AuthContext>
    </div >
  )
}