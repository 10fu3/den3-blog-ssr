import {Grid, Typography} from "@mui/material";
import React from "react";
import {CIRCLE_COLOR} from "../const";
import Link from "next/link";
import Hover from "./Hover";

const TopExplanation = ()=>{
    return <div style={{width:"100%",backgroundColor:"white",padding:30,borderRadius:20,textAlign:"center"}}>
        <div style={{marginTop:30,fontSize:25,fontWeight:400,color:CIRCLE_COLOR}}>
            電子計算機研究会 通称: Den3は<br/>芝浦工業大学で活動する<wbr/>プログラミング系サークルです
        </div>
        <div style={{marginTop:20,fontSize:18,fontWeight:400}}>
            競技プログラミング,ゲーム制作,WEBアプリ開発,機械学習研究などを行っています
        </div>
        <Grid container justifyContent="center" style={{width:"100%",marginTop:40,textAlign:"center"}}>
            <Grid item>
                <Link href="/activity_content">
                    <a>
                        <Hover onHover={<div style={{backgroundColor:"#333",padding:"10px 40px",color:"white"}}>もっと詳しく</div>}>
                            <div style={{backgroundColor:CIRCLE_COLOR,padding:"10px 40px",color:"white"}}>もっと詳しく</div>
                        </Hover>
                    </a>
                </Link>
            </Grid>
        </Grid>

    </div>
}

export default TopExplanation