import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, Link, Box, Heading, useColorMode } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Script from 'next/script'
import React from 'react'
export default function Home() {

  const { colorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <Head>
        <title>About freeSS- A Tool To Take Screenshot Of A Webpage</title>
        <meta name="description" content="About the web app, which is, indeed, simple and straight" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About freeSS
          <div style={{ fontSize: '1rem' }}>
            A Tool To Take Screenshot Of A Webpage
          </div>
        </h1>
        <Box boxShadow='xl' p='5' m={4} rounded='md' style={{ padding: "10px" }}>
           <Heading style={{ color: "#38B2AC", padding: "10px" }}>What Is This?</Heading>
           Simple tool to extract the screenshot of the given web page URL. made elegent and decent in design without the advertisements annoying you all the way.
        </Box>
        <Box boxShadow='xl' p='10' rounded='md'>
           <a href="https://www.producthunt.com/posts/freess?utm_source=badge-review&utm_medium=badge&utm_souce=badge-freess#discussion-body" target="_blank" rel="noreferrer"><img src={`https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=327801&theme=${colorMode}`} alt="freeSS - a free and powerfull screenshot tool for the web. | Product Hunt" style={{width: "250px", height: "54px" }} /></a>
           <a href="https://www.producthunt.com/posts/freess?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-freess" target="_blank" rel="noreferrer"><img src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=327801&theme=${colorMode}`} alt="freeSS - a free and powerfull screenshot tool for the web. | Product Hunt" style={{width: "250px", height: "54px" }} /></a>
        </Box>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          
          <Link m={3} color="teal.500" href="/">Go Back ?</Link>          
          <Link m={3} color="teal.500" href="https://atordvairn.js.cool/">(c) atordvairn {new Date().getFullYear()}</Link>
          <Link m={3} color="teal.500" href="https://twitter.com/atordvairn">Twitter</Link>
          <Link m={3} color="teal.500" href="https://github.com/atordvairn">GitHub</Link>
        </span>
      </footer>
    </div>
  )
}
