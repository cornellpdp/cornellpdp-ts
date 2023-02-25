import Head from "next/head"

const titleDefault = "Pi Delta Psi Fraternity Inc. at Cornell University"

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />

      <title>{title}</title>
    </Head>
  )
}
