import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import TopBar from "../component/top/TopBar";
import {Card, Grid} from "@mui/material";
import Footer from "../component/Footer";
import {useRouter} from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <div>
    <Grid container justifyContent="center" style={{width:"100%",height:"100%"}}>
      <Grid item style={{width:"100%",height:"100%"}}>
        {
          router.asPath.includes('editor') ? <></> : <TopBar/>
        }
        <Component {...pageProps} />
        {
          router.asPath.includes('editor') ? <></> : <Footer/>
        }
      </Grid>
    </Grid>
  </div>
}

export default App
