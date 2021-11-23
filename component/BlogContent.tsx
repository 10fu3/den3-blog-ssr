import React from "react";
import {Avatar, Divider, Grid, Hidden, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {ArticleHeader} from "./ArticleHeader";
import StyledMarkdown from "./StyledMarkdown";
import CommentBox from "./CommentBox";
import {GITHUB_ICON, TWITTER_ICON} from "../const/Icon";
import ExternalLinksCard from "./ExternalLinksCard";
import AuthorCard from "./AuthorCard";

export interface BlogAuthor {
    name:string,
    avatar:string,
    bio:string,
    twitter?:string,
    github?:string
}

export interface BlogContentComment {
    author:BlogAuthor,
    body:string
}

export interface BlogContentProps {
    markdown:string,
    title:string,
    header_img?:string,
    author:BlogAuthor,
    comment: BlogContentComment[]
}

const BlogContent:React.FC<BlogContentProps> = (props)=>{
    return <Grid container justifyContent="center" style={{width:"100%"}}>
        <Grid item style={{width:"100%",maxWidth:"1120px",paddingBottom:64}}>
            <ArticleHeader>
                {props.title}
            </ArticleHeader>
            <Hidden lgUp>
                <Grid container justifyContent="center" style={{width:"100%"}}>
                    <Grid item style={{backgroundColor:"white",borderRadius:"12px"}}>
                        <div>
                            <Grid item style={{width:"calc(100% - 80px)",maxWidth:"790px",margin:"64px 40px"}}>
                                <StyledMarkdown markdown={props.markdown}/>
                                <div style={{marginTop:20,marginBottom:20}}>
                                    <Divider/>
                                </div>
                                <Grid container justifyContent="center">
                                    <Grid item style={{marginTop:20}}>
                                        <AuthorCard author={props.author}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden lgDown>
                <Grid container style={{height:"calc(100% - 300px)"}}>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <div style={{width:"100%",maxWidth:790,backgroundColor:"white",padding:40,borderRadius:"12px",float:"left"}}>
                                    <StyledMarkdown markdown={props.markdown}/>
                                    <div style={{marginTop:20,marginBottom:20}}>
                                        <Divider/>
                                    </div>
                                    <Grid container justifyContent="center">
                                        <Grid item style={{marginTop:20}}>
                                            <AuthorCard author={props.author}/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop:40}}>
                            <Grid item style={{width:"100%",maxWidth:790,backgroundColor:"white",padding:10,borderRadius:"12px",float:"left"}}>
                                <CommentBox comment={props.comment}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{height:"calc(100%)",marginLeft:30}}>
                        <div style={{width:"300px",height:"100%"}}>
                            <div style={{width:"300px",float:"left",position:"sticky",top:30,bottom:200}}>
                                <div style={{backgroundColor:"white",borderRadius:"12px",marginBottom:32,padding:20}}>
                                    <AuthorCard author={props.author}/>
                                </div>
                                <div style={{backgroundColor:"white",borderRadius:"12px",padding:10}}>
                                    <ExternalLinksCard/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
            <div style={{marginBottom:64}}/>
        </Grid>
    </Grid>
}

export default BlogContent