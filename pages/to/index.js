import React from 'react'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Input } from "@chakra-ui/react"
import Script from 'next/script'

export default function To() {
    const router = useRouter()
    let todo = {
        name: router.query.q
    };

    fetch('/api/get/', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => window.location.replace(json.url))

    return (<>
<div className={styles.container}>
      <Head>
        <title>please wait...</title>
        <meta name="description" content="please wait ......" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Please wait for ~5 seconds...
          <div style={{ fontSize: '1.5rem' }}>
             Chill 🧊
          </div>
        </h1>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          (c) volcareso
        </span>
      </footer>
    </div>
    </>)
}
