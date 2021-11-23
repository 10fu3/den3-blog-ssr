import Hover from "./Hover";
import {Avatar, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";
import {BlogListEntity} from "../model/BlogListPage";

const HoverBlogItem = (props:{e:BlogListEntity,height:number,big?:boolean})=>{
    return <Link href={'/blog/article/'+props.e.id}>
        <a>
            <div style={{position:"relative",backgroundColor:"white",height:props.height,overflow:"hidden",backgroundSize:"cover",backgroundImage:"url('"+props.e.thumbnail+"')"}}>
                <div style={{width:"100%",height:"100%",overflowWrap:"break-word",wordBreak:"break-word"}}>
                    <Hover onHover={<div style={{width:"100%",minHeight:205,padding:props.big?"96px 32px":"32px 16px",paddingLeft:props.big?64:16,paddingRight:props.big?64:16,paddingBottom:props.big?96:56,backgroundColor:"rgba(35,35,35,0.69)",position:"absolute",bottom:0}}>
                        {
                            props.big ? <Typography variant="h4" style={{fontWeight:"bold",color:"white",width:"100%",textAlign: "center",lineHeight:1.15}}>
                                {props.e.title}
                            </Typography> : <>
                                <small style={{margin:0,color:"white"}}>{props.e.date}</small>
                                <p style={{margin:0,fontSize:20,fontWeight:500,color:"white",width:"100%",textAlign:"left"}}>
                                    {props.e.title}
                                    {
                                        props.e.author ?
                                            <div style={{marginTop:16}}>
                                                <Avatar src={props.e.author.avatar} style={{float:"left"}}/>
                                                <p style={{float:"left",fontWeight:"none",margin:0,marginLeft:10}}>{props.e.author.name}</p>
                                            </div> : <></>
                                    }
                                </p>
                            </>
                        }
                    </div>}>
                        <div style={{width:"100%",minHeight:148,padding:props.big?"64px 32px":"16px 16px",backgroundColor:"rgba(59,172,222,0.7)",position:"absolute",bottom:0}}>
                            {
                                props.big ? <Typography variant="h4" style={{fontWeight:"bold",color:"white",width:"100%",textAlign: "center",lineHeight:1.15}}>
                                    {props.e.title}
                                </Typography> : <>
                                    <small style={{margin:0,color:"white"}}>{props.e.date}</small>
                                    <p style={{margin:0,fontSize:20,fontWeight:500,color:"white",width:"100%",textAlign:"left"}}>
                                        {props.e.title}
                                        {
                                            props.e.author ?
                                                <div style={{marginTop:16}}>
                                                    <Avatar src={props.e.author.avatar} style={{float:"left"}}/>
                                                    <p style={{float:"left",fontWeight:"none",margin:0,marginLeft:10}}>{props.e.author.name}</p>
                                                </div> : <></>
                                        }
                                    </p>
                                </>
                            }
                        </div>
                    </Hover>
                </div>
            </div>
        </a>
    </Link>
}

export default HoverBlogItem
