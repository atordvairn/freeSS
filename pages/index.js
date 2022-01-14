import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, Link, Box } from "@chakra-ui/react"
import { ArrowForwardIcon, CopyIcon } from '@chakra-ui/icons'
import Script from 'next/script'
import React from 'react'
import swal from 'sweetalert'
import copy from 'copy-text-to-clipboard'

export default function Home() {
  function getSS(event){
    event.preventDefault();
   try{
    document.querySelector("#screenshot").src = "https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif";
    var theUrl = event.target.url.value;
     
    function isMobile(){
      if(event.target.mobile.checked){
        return "/device=mobile/";
      }
      return "/";
    }

    if(theUrl.match(/\:\/\//) == "://"){
      fetch("https://cdn.statically.io/screenshot"+isMobile()+theUrl.split(/\:\/\//)[1])
        .then((res) => {
          document.querySelector("#screenshot").src = "https://cdn.statically.io/screenshot"+isMobile()+theUrl.split(/\:\/\//)[1];
        })
        .then((res) => {swal("Good job!", "The screenshot was generated successfully!", "success")})
    }else{
      fetch("https://cdn.statically.io/screenshot"+isMobile()+theUrl)
        .then((res) => {
          document.querySelector("#screenshot").src = "https://cdn.statically.io/screenshot"+isMobile()+theUrl;
        })
        .then((res) => {swal("Good job!", "The screenshot was generated successfully!", "success")})
    }
   }catch(e){alert(e)}
  }


  function copyURL(){
    copy(document.querySelector("#screenshot").src);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>freeSS - A Tool To Take Screenshot Of Webpages 🕸️</title>
        <meta name="description" content="A tool to take screenshot of webpages 🕸️." />
        <link rel="icon" href="/favicon.ico" />
     </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          freeSS
          <div style={{ fontSize: '1rem' }}>
            Take Screenshot Of Webpages 🕸️
          </div>
        </h1>
        <p className={styles.description}>
          Fast. Free. Open source.
        </p>

        <form onSubmit={getSS}>          
         <div className={styles.input_cont}>
          <Input placeholder="https://google.com/" id="url" type="url" name="url" required maxlength="200" minlength="5"/>
          <input type="checkbox" id="mobile" name="mobile" />
          <label htmlFor="mobile"> mobile</label>
         </div>
         <div className={styles.button_doiIt}>
          <Button id="button" type="submit" colorScheme="teal" rightIcon={<ArrowForwardIcon />} style={{ margin: "5px" }}>
            Snap !
          </Button>
         </div>
        </form>
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" id="screenshot" alt="the screenshot you requested" />
        <br />
        <Button onClick={copyURL} disabled={loading_} id="copyURL" type="button" colorScheme="teal" rightIcon={<CopyIcon />} style={{ margin: "5px" }}>
          Copy link
        </Button>
        <Box style={{ margin: "20px" }} boxShadow='xl' p='5' rounded='md'>
           <span style={{ color: "#38B2AC" }}>Pro-Tip: </span> bookmark 🔖 this page for quick access!
        </Box>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Link m={3} color="teal.500" href="/about">About this site</Link>
          <Link m={3} color="teal.500" href="//atordvairn.js.cool">(c) atordvairn {new Date().getFullYear()}</Link>
          <Link m={3} color="teal.500" href="https://twitter.com/atordvairn">Twitter</Link>
          <Link m={3} color="teal.500" href="https://github.com/atordvairn">GitHub</Link>
        </span>
      </footer>
    </div>
  )
}
