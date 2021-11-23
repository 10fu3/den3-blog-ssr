import {NextComponentType} from "next";
import {AppBar, Grid, Hidden, Toolbar, Typography} from "@mui/material";
import TopBarLogo from "./TopBarLogo";
import {CIRCLE_COLOR} from "../const";
import React, {CSSProperties} from "react";
import Hover from "./Hover";
import Link from "next/link";
import {Links} from "../const/Links";

const TopBarLink:React.FC<{style?:CSSProperties,link:string,title:string}> = (props)=>{

    return <div>
        <Link href={props.link}>
            <a>
                <Hover onHover={<div style={{height:86}}>
                    <Grid container alignContent="center" style={{...props.style,backgroundColor:CIRCLE_COLOR}}>
                        <Grid item style={{padding:15,color:"white",lineHeight:2}}>
                            {props.title}
                        </Grid>
                    </Grid>
                </div>}>
                    <div style={{height:86}}>
                        <Grid container alignContent="center" style={props.style}>
                            <Grid item style={{padding:15,color:CIRCLE_COLOR,lineHeight:2}}>
                                <Link href={props.link}>
                                    <a>
                                        {props.title}
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Hover>
            </a>
        </Link>
    </div>
}

const TopBar:NextComponentType = ()=>{
    return <>
       <Grid container style={{width:"100%",backgroundColor:"#fcfcfc"}} justifyContent="center">
           <Grid item style={{width:"100%",maxWidth:"1120px"}}>
               <Grid container style={{width:"100%"}}>
                   <Grid item style={{padding:15}}>
                       <Link href="/">
                           <a>
                               <TopBarLogo/>
                           </a>
                       </Link>
                   </Grid>
                   <Hidden mdUp>
                       mobile
                   </Hidden>
                   <Hidden mdDown>
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