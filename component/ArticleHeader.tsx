import React from "react";
import {Grid} from "@mui/material";

export const ArticleHeader:React.FC<{img?:string}> = (props)=>{
    return <div className="blurBg" style={{paddingTop:45,marginBottom:45,borderRadius:"0 0 12px 12px",backgroundSize:"cover",backgroundImage:"url('"+props.img ? props.img : ''+"')"}}>
        <Grid container justifyContent="center" style={{width:"100%"}}>
            <Grid item style={{width:"100%",maxWidth:"1120px",textAlign:"center"}}>
                <p style={{fontSize:"40px",fontWeight:"bold",color: props.img ? "#ffffff" : "#333"}}>
                    {
                        props.children
                    }
                </p>
            </Grid>
        </Grid>
    </div>
}