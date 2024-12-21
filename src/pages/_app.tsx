import "@/styles/index.css"
import type { AppProps } from "next/app"
import Header from "@/config"
import Layout from "@/components/Layout"
import { Analytics } from "@vercel/analytics/react"

//import Donate from "@/pages/Donate"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header title={pageProps.title} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}
