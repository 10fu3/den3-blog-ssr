import {Grid} from "@mui/material";
import React from "react";
import TwitterTimeline from "./TwitterTimeline";
import ExternalLinksCard from "./ExternalLinksCard";

const Footer = ()=>{
    return <Grid container style={{width:"100%",backgroundColor:"#333"}} justifyContent="center">
        <Grid item style={{width:"100%",maxWidth:"1120px",padding:"20px 0px"}}>
            <Grid container alignContent="center" justifyContent="space-around">
                <Grid item style={{marginLeft:20}}>
                    <div>
                        <TwitterTimeline/>
                    </div>
                    <div style={{backgroundColor:"white",borderRadius:"12px",marginTop:20,padding:10}}>
                        <ExternalLinksCard/>
                    </div>
                </Grid>
                <Grid item>
                    <Grid container style={{height:"100%",padding:40}} alignContent="center">
                        <Grid item>
                            <p style={{color:"white",fontSize:30,margin:"20px 0px"}}>芝浦工業大学</p>
                            <p style={{color:"white",fontSize:30,margin:"20px 0px"}}>電子計算機研究会</p>
                            <div style={{margin:"30px 0px"}}>
                                <p style={{color:"white",margin:"10px 0px"}}>メール : den3.shibaura@gmail.com</p>
                                <p style={{color:"white",margin:"10px 0px"}}>Twitter : @sit_densan</p>
                            </div>
                            <p style={{color:"white",margin:"10px 0px"}}>Copyright©1967-{new Date().getFullYear()} 芝浦工業大学電子計算機研究会(Den3) All Rights Reserved.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}
export default Footer