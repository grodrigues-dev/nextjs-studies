import '../styles/globals.css'
import '../styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/Footer'

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
  <ThemeProvider theme={theme}>
    <Header />
      <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
  )
}

export default MyApp
