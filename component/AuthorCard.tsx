import React from "react";
import {BlogAuthor} from "./blog/BlogContent";
import {Avatar, Grid, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {GITHUB_ICON, TWITTER_ICON} from "../const/Icon";
import Link from "next/link";

const AuthorCard:React.FC<{author:BlogAuthor}> = (props)=>{
    return <div style={{backgroundColor:"white",borderRadius:12,padding:20,boxShadow:"0 2px 4px #4385bb12"}}>
        <ListItem alignItems="flex-start" style={{padding:0}}>
            <ListItemAvatar>
                <Avatar style={{backgroundColor:"#000"}} alt="Remy Sharp" src={props.author.avatar} />
            </ListItemAvatar>
            <ListItemText primary={<>
                <Link href={'/blog/author/'+props.author.id}>
                    <a style={{fontWeight:"bold",color:"#303030"}}>{props.author.name}</a>
                </Link>
            </>} secondary={props.author.bio}/>
        </ListItem>
        <Grid container justifyContent="space-around" style={{width:"100%",marginTop:20}}>
            {
                props.author.github ? <Grid item style={{width:32,height:"auto"}}>
                    <Link href={props.author.github}>
                        <a>
                            {GITHUB_ICON}
                        </a>
                    </Link>
                </Grid> : <></>
            }
            {
                props.author.twitter ? <Grid item style={{width:32,height:"auto",color:"#14a4af"}}>
                    <Link href={props.author.twitter}>
                        <a>
                            {TWITTER_ICON}
                        </a>
                    </Link>
                </Grid> : <></>
            }
        </Grid>
    </div>
}

export default AuthorCard
