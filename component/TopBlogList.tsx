import {BlogListEntity} from "../model/BlogListPage";
import React from "react";
import {Grid} from "@mui/material";
import HoverBlogItem from "./HoverBlogItem";
import Link from "next/link";
import Hover from "./Hover";
import {CIRCLE_COLOR} from "../const";

const TopBlogList = (d:{e:BlogListEntity[]})=>{
    return <div style={{paddingBottom:64}}>
        <h1 style={{marginTop:30,marginBottom:30,color:"#2a2c2e"}}>ブログ一覧</h1>
        <Grid container>
            {
                d.e.map((e,i)=>{
                    return <Grid item key={e.title} style={{padding:2}} xs={12} sm={6} md={4}>
                        <HoverBlogItem e={e} height={320}/>
                    </Grid>
                })
            }
        </Grid>
        <Grid container justifyContent="center" style={{width:"100%",marginTop:40,textAlign:"center"}}>
            <Grid item>
                <Link href="">
                    <a>
                        <Hover onHover={<div style={{backgroundColor:"#333",padding:"10px 40px",color:"white"}}>記事一覧へ</div>}>
                            <div style={{backgroundColor:CIRCLE_COLOR,padding:"10px 40px",color:"white"}}>記事一覧へ</div>
                        </Hover>
                    </a>
                </Link>
            </Grid>
        </Grid>
    </div>
}

export default TopBlogList