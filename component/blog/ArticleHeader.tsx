import React from "react";
import {Grid} from "@mui/material";

export const ArticleHeader:React.FC<{img?:string}> = (props)=>{
    return <div style={{paddingTop:45,position:"relative",marginBottom:45,borderRadius:"0 0 12px 12px",backgroundColor:props.img ? "white" : "rgba(252,252,252,0)"}}>

        <div style={{opacity:0.4,height:250,backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`url("${props.img ? props.img : ''}")`}}/>

        <div style={{width:"100%"}}>
            <Grid container justifyContent="center" style={{width:"100%",position:"absolute",top:100}}>
                <Grid item style={{width:"100%",maxWidth:"1120px",textAlign:"center"}}>
                    <p style={{fontSize:"40px",fontWeight:"bold",color: "#333"}}>
                        {
                            props.children
                        }
                    </p>
                </Grid>
            </Grid>
        </div>
    </div>
}
