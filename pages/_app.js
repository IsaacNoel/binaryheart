import '../styles/globals.css'
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
  return(
      <Component {...pageProps} />
  )
}

export default MyApp
