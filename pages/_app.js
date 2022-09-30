import 'styles/globals.css'
import 'styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

const theme = {
  colors: {
    primary: '#355c7d'
  }
}

function MyApp({ Component, pageProps }) {
  
  if(Component.getLayout) {
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
  
  return (
    <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Jorginho's app</title>
        <meta name="description" content="demo app made by Jorginho"></meta>
      </Head>
      {/* <Header /> */}
        <Component {...pageProps} />
      {/* <Footer /> */}
    </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
