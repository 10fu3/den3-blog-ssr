import {Divider, Grid} from "@mui/material";
import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import {NextPage} from "next";
import remarkGfm from "remark-gfm";
import {BigText, MiddleText} from "./TextComponent";
import {CIRCLE_COLOR} from "../const";

export const H1:NextPage = (props)=>{

   return <div style={{marginTop:20}}>
       <BigText>
           <Grid item style={{marginLeft:3}}>
               <div style={{marginLeft:10,marginRight:10,height:"100%",width:3,backgroundColor:"#000000"}}/>
           </Grid>
           <Grid item>
               <div style={{fontSize:"14px",fontWeight:"bold"}}>{props.children}</div>
           </Grid>
       </BigText>
   </div>
}

export const H2:NextPage = (props)=>{
    return <div style={{marginTop:10}}>
        <MiddleText>
            <Grid item style={{marginLeft:3}}>
                <div style={{marginLeft:10,marginRight:10,height:"100%",width:3,backgroundColor:"#000000"}}/>
            </Grid>
            <Grid item>
                <div style={{fontSize:"14px",fontWeight:"bold"}}>{props.children}</div>
            </Grid>
        </MiddleText>
    </div>
}

const StyledMarkdown:NextPage<{markdown:string}> = (props)=>{
    return <ReactMarkdown
        components={{
            // Map `h1` (`# heading`) to use `h2`s.
            h1: ({node, ...props}) => <p style={{wordBreak:"break-all"}}>{props.children}</p>,

            h2: ({node, ...props}) => <div><h1 style={{fontSize:"1.7em",color:"#353535",padding:".25em .5em",marginTop:64,marginBottom:17,borderLeft:"4px solid "+CIRCLE_COLOR,wordBreak:"break-all"}}>{props.children}</h1><Divider/></div>,

            p: ({node, ...props}) => <p style={{color:"#333",fontSize:16,lineHeight:3,marginTop:24,wordBreak:"break-all"}}>
                {props.children}
            </p>,
            img: ({node, ...props}) => <img src={props.src} style={{width:"100%",height:"auto"}}>
                {props.children}
            </img>,
            a: ({node, ...props}) => <a href={props.href} style={{textDecoration:"underline",wordBreak:"break-all"}}>
                {props.children}
            </a>,
            li: ({node, ...props}) => <li style={{color:"#333",fontWeight:"bold",listStyleType:"square",wordBreak:"break-all"}}>
                {props.children}
            </li>,
            table: ({node, ...props}) => <table style={{width:"100%",borderCollapse:"collapse",wordBreak:"break-all"}}>
                {props.children}
            </table>,
            thead: ({node, ...props}) => <thead style={{wordBreak:"break-all"}}>
                {props.children}
            </thead>,
            th: ({node, ...props}) => <th style={{backgroundColor:"#93cbe2",border:"solid 1px #d0d0d0",padding:3,color:"#2c2c2c",wordBreak:"break-all"}}>
                {props.children}
            </th>,
            td: ({node, ...props}) => <td style={{backgroundColor:"white",border:"solid 1px #d0d0d0",textAlign:"center",padding:6,color:"#2c2c2c",wordBreak:"break-all"}}>
                {props.children}
            </td>
        }}
        remarkPlugins={[remarkGfm]}
    >
        {props.markdown}
    </ReactMarkdown>
}

export default StyledMarkdown

