import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, Link, Box, Checkbox, Divider } from "@chakra-ui/react"
import { ArrowForwardIcon, CopyIcon } from '@chakra-ui/icons'
import React from 'react'
import copy from 'copy-text-to-clipboard'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright , faAddressBook } from '@fortawesome/free-solid-svg-icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'

export default function Home() {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function toastSuccess() {
    Toast.fire({ icon: 'success', title: 'The screenshot was generated successfully!' })
  }

  async function getSS(event) {
    event.preventDefault();
    try {
      document.querySelector("#copyURL").style.display = "none";
      if (event.target.pdf.checked) {
        if (event.target.url.value.match(/\:\/\//) == "://") {
          window.open("https://cdn.statically.io/screenshot/pdf/" + event.target.url.value.split(/\:\/\//)[1]);
        } else {
          window.open("https://cdn.statically.io/screenshot/pdf/" + event.target.url.value);
        }
      } else {
        document.querySelector("#screenshot").src = "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif";
        var theUrl = event.target.url.value;

        function isMobile() {
          if (event.target.mobile.checked) {
            return "/device=mobile";
          }
          return "";
        }

        function isFullPage() {
          if (event.target.full.checked) {
            return "full=true/";
          }
          return "";
        }

        function comma() {
          if (event.target.mobile.checked && event.target.full.checked) {
            return ",";
          } else {
            return "/";
          }
        }

        if (theUrl.match(/\:\/\//) == "://") {
          fetch("https://cdn.statically.io/screenshot" + isMobile() + comma() + isFullPage() + theUrl.split(/\:\/\//)[1])
            .then((res) => {
              document.querySelector("#screenshot").src = "https://cdn.statically.io/screenshot" + isMobile() + comma() + isFullPage() + theUrl.split(/\:\/\//)[1];
              document.querySelector("#copyURL").style.display = "block";
              toastSuccess();
            })
        } else {
          fetch("https://cdn.statically.io/screenshot" + isMobile() + comma() + isFullPage() + theUrl)
            .then((res) => {
              document.querySelector("#screenshot").src = "https://cdn.statically.io/screenshot" + isMobile() + comma() + isFullPage() + theUrl;
              document.querySelector("#copyURL").style.display = "block";
              toastSuccess();
            })
        }
      }
    } catch (error) {
      Swal.fire(
        'Oops',
        error,
        'warning'
      )
    }
  }

  function copyURL() {
    copy(document.querySelector("#screenshot").src);
  }

  function pdfChanged() {
    if (document.querySelector("#pdf").checked) {
      document.querySelector("#controls").style.display = "none";
      document.querySelector("#full").isChecked = false;
      document.querySelector("#mobile").isChecked = false;
    } else {
      document.querySelector("#controls").style.display = "block";
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOneOpen , onOpen: onModalOneOpen, onClose: onModalOneClose } = useDisclosure()
  const { isOpen: isTwoOpen , onOpen: onModalTwoOpen, onClose: onModalTwoClose } = useDisclosure()

  const { colorMode, toggleColorMode } = useColorMode();

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
            <Input placeholder="https://google.com/" id="url" type="url" name="url" required maxlength="200" minlength="5" />
            <div id="controls">
              <Checkbox id="mobile" name="mobile" style={{ margin: "5px" }}>
                mobile view
              </Checkbox>
              <br />
              <Checkbox id="full" name="full" style={{ margin: "5px" }} >
                full page screenshot
              </Checkbox>
            </div>
            <Divider />
            <Checkbox onChange={pdfChanged} id="pdf" name="pdf" style={{ margin: "5px" }}>
              download full page pdf
            </Checkbox>
          </div>
          <div className={styles.button_doiIt}>
            <Button id="button" type="submit" colorScheme="teal" rightIcon={<ArrowForwardIcon />} style={{ margin: "5px" }}>
              Snap !
            </Button>
          </div>
        </form>
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" id="screenshot" alt="the screenshot you requested" />
        <br />
        <Button onClick={copyURL} id="copyURL" type="button" colorScheme="teal" rightIcon={<CopyIcon />} style={{ margin: "5px", display: "none" }}>
          Copy link
        </Button>
        <Box style={{ margin: "20px" }} boxShadow='xl' p='5' rounded='md'>
          <span style={{ color: "#38B2AC" }}>Pro-Tip: </span> bookmark 🔖 this page for quick access!
        </Box>
        <Box style={{ margin: "20px" }} boxShadow='xl' p='5' rounded='md'>
          <span style={{ color: "#38B2AC" }}>Need Help?</span>
          <br />
          <div>    
            <Button m={2} onClick={toggleColorMode}>Toogle Theme</Button>
            <Button m={2} onClick={onOpen}>showing error</Button>
             <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
               <ModalHeader>
                 showing error
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                 sometimes, the server times out the crawl as the site is too big or long. In that case the best thing is to try again, if the site is still showing an error, it means that:
                 <br />
                 <ul>
                   <li>
                     Check if you&apos;re accessing a webpage and not a file ( ends in .txt or other extensions )
                   </li>
                   <li>
                     check your internet connection 🙂
                   </li>
                   <li>
                     Check if the site is available to you. If not, the server can&apos;t reach it also.
                   </li>
                 </ul>
               </ModalBody>
               <ModalFooter>
                 <Button colorScheme='blue' mr={3} onClick={onClose}>
                   Close
                 </Button>
               </ModalFooter>
             </ModalContent>
            </Modal>


           <br />

            <Button m={2} onClick={onModalOneOpen}>infinitely loading</Button>
             <Modal isOpen={isOneOpen} onClose={onModalOneClose}>
              <ModalOverlay />
              <ModalContent>
               <ModalHeader>
                 infinitely loading
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                 The crawling process takes some time. Even if after a considerable amount of time , ur screenshot is not appearing, these  might help:
                 <br />
                 <ul>
                   <li>
                     copy the url from the address bar. ( Best practices in the town )
                   </li>
                   <li>
                     check your internet connection 🙂. Your internet speed or data might not be sufficient to download the image. It takes longer download in desktop full images.
                   </li>
                   <li>
                     Check if the site is available to you. If not, the server can&apos;t reach it also.
                   </li>
                 </ul>
               </ModalBody>
               <ModalFooter>
                 <Button colorScheme='blue' mr={3} onClick={onModalOneClose}>
                   Close
                 </Button>
               </ModalFooter>
             </ModalContent>
            </Modal>


            <Button m={2} onClick={onModalTwoOpen}>some other error</Button>
             <Modal isOpen={isTwoOpen} onClose={onModalTwoClose}>
              <ModalOverlay />
              <ModalContent>
               <ModalHeader>
                 some other error
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                 Hmm, in this case, u need to comment below and tell me what it is , i will add it in here also if needed so!
               </ModalBody>
               <ModalFooter>
                 <Button colorScheme='blue' mr={3} onClick={onModalTwoClose}>
                   Close
                 </Button>
               </ModalFooter>
             </ModalContent>
            </Modal>

          </div>
        </Box>
        
      </main>
      <div className="giscus"></div>
      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Link m={3} color="teal.500" href="/about"><FontAwesomeIcon icon={faAddressBook} style={{ marginRight: "5px" }} /> About this site</Link>
          <Link m={3} color="teal.500" href="//atordvairn.js.cool"><FontAwesomeIcon icon={faCopyright} style={{ marginRight: "5px" }} /> atordvairn {new Date().getFullYear()}</Link>
          <Link m={3} color="teal.500" href="https://twitter.com/atordvairn">Twitter</Link>
          <Link m={3} color="teal.500" href="https://github.com/atordvairn">GitHub</Link>
        </span>
      </footer>
    </div>
  )
}
