import {NextComponentType} from "next";
import {AppBar, Grid, Hidden, Toolbar, Typography} from "@mui/material";
import TopBarLogo from "./TopBarLogo";
import {CIRCLE_COLOR} from "../const";
import React, {CSSProperties} from "react";
import Hover from "./Hover";
import Link from "next/link";
import {Links} from "../const/Links";

const TopBarLink:React.FC<{style?:CSSProperties,link:string,title:string,isMobile?:boolean}> = (props)=>{

    return <Link href={props.link}>
        <a style={{textAlign:"center",width:"100%"}}>
            <Hover onHover={<div style={{height: !props.isMobile ? 86 : 33,paddingTop:!props.isMobile ? 28 : 1,paddingLeft:15,paddingRight:15,backgroundColor:CIRCLE_COLOR,width:"100%",lineHeight:2,color:"white"}}>
                {props.title}
            </div>}>
                <div style={{height: !props.isMobile ? 86 : 33,paddingTop:!props.isMobile ? 28 : 1,lineHeight:2,color:CIRCLE_COLOR,width:"100%",paddingLeft:15,paddingRight:15}}>
                    {props.title}
                </div>
            </Hover>
        </a>
    </Link>
}

const TopBar:NextComponentType = ()=>{
    return <>
       <Grid container style={{width:"100%",backgroundColor:"#fcfcfc"}} justifyContent="center">
           <Grid item style={{width:"100%",maxWidth:"1120px"}}>
               <Grid container style={{width:"100%"}}>
                   <Hidden mdUp>
                       <Grid item style={{width:"100%"}}>
                           <Grid container justifyContent="center" style={{width:"100%"}}>
                               <Grid item style={{paddingTop:15}}>
                                   <div>
                                       <Link href="/">
                                           <a>
                                               <TopBarLogo/>
                                           </a>
                                       </Link>
                                   </div>
                               </Grid>
                           </Grid>

                           <div>
                               <ul style={{flexWrap:"wrap",margin:0,display:"flex",padding:0,listStyle:"none"}}>
                                   {
                                       Links.map((e,i)=>{
                                           return <li key={e.url+"-"+i} style={{flex:"1 0 auto",margin:"0px"}}>
                                               <TopBarLink isMobile link={e.url} title={e.tag}/>
                                           </li>
                                       })
                                   }
                               </ul>
                           </div>

                       </Grid>
                   </Hidden>
                   <Hidden mdDown>
                       <Grid item style={{padding:15}}>
                           <Link href="/">
                               <a>
                                   <TopBarLogo/>
                               </a>
                           </Link>
                       </Grid>
                       <div style={{flexGrow:1}}/>
                       {
                           Links.map((e,i)=>{
                               return <><Grid item>
                                   <TopBarLink style={{height:"100%"}} link={e.url} title={e.tag}/>
                               </Grid></>
                           })
                       }
                   </Hidden>
               </Grid>
           </Grid>
       </Grid>
        <div style={{backgroundColor:CIRCLE_COLOR,width:"100%",height:8}}/>
    </>
}

export default TopBar