import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import TopBar from "../component/top/TopBar";
import {Card, Grid} from "@mui/material";
import Footer from "../component/Footer";

function App({ Component, pageProps }: AppProps) {
  return <div>
    <Grid container justifyContent="center" style={{width:"100%"}}>
      <Grid item style={{width:"100%"}}>
        <TopBar/>
        <Component {...pageProps} />
        <Footer/>
      </Grid>
    </Grid>
  </div>
}

export default App
