import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tycoon - A curated social platform.</title>
        <meta
          name="description"
          content="A curated social platform delivering the world’s best ideas."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/tycoonFavicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/tycoonFavicons/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/tycoonFavicons/favicon-32x32.png"/>
        {/* <link rel="icon" href="/tycoonFavicons/TycoonTLogo.svg" type="image/svg+xml" sizes="any"/> */}
        <link rel="manifest" href="/tycoonFavicons/site.webmanifest"/>
        <link rel="mask-icon" href="/tycoonFavicons/safari-pinned-tab.svg" color="#171717"/>
        <meta name="msapplication-TileColor" content="#171717"/>
        <meta name="theme-color" content="#171717"/>
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        {/* <Reviews /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
