import React from "react";
import {Grid} from "@mui/material";
import HoverBlogItem from "./HoverBlogItem";

const BlogListComponent:React.FC<{}> = (props)=>{
    return <div>
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
    </div>
}