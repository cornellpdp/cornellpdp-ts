import "@/styles/index.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Header from "@/config"
import Layout from "@/components/Layout"
import { Analytics } from "@vercel/analytics/react"

//import Donate from "@/pages/Donate"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico"/>
      </Head>
      <Header title={pageProps.title} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}
