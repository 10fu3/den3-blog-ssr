import React from "react";
import {Grid} from "@mui/material";
import HoverBlogItem from "./HoverBlogItem";
import {BlogListEntity} from "../model/BlogListPage";

const BlogListComponent:React.FC<{e:BlogListEntity[]}> = (props)=>{
    return <div>
        <h1 style={{marginTop:30,marginBottom:30,color:"#2a2c2e"}}>ブログ一覧</h1>
        <Grid container>
            {
                props.e ? props.e.map((e,i)=>{
                    return e ? <Grid item key={e.title} style={{padding:2}} xs={12} sm={6} md={4}>
                        <HoverBlogItem e={e} height={320}/>
                    </Grid> : <></>
                }) : <></>
            }
        </Grid>
        <div></div>
    </div>
}

export default BlogListComponent
