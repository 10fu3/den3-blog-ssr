import {NextPage} from "next";
import {Divider, Grid} from "@mui/material";

export const BigText:NextPage<{isCenter?:boolean}> = (props)=>{
    return <div style={{height:38,padding:2}}>
        <Grid container justifyContent={props.isCenter ? "center" : "left"} alignContent="center" style={{height:"100%"}}>
            {props.children}
        </Grid>
        <Grid container justifyContent={props.isCenter ? "center" : "left"} alignContent="center" style={{height:"100%",width:"100%"}}>
            <Grid item style={{width:"100%"}}>
                <Divider/>
            </Grid>
        </Grid>
    </div>
}

export const MiddleText:NextPage<{isCenter?:boolean}> = (props)=>{
    return <div style={{height:38,padding:2}}>
        <Grid container justifyContent={props.isCenter ? "center" : "left"} alignContent="center" style={{height:"100%"}}>
            {props.children}
        </Grid>
        <Grid container justifyContent={props.isCenter ? "center" : "left"} alignContent="center" style={{height:"100%",width:"100%"}}>
            <Grid item style={{width:"100%"}}>
                <Divider/>
            </Grid>
        </Grid>
    </div>
}