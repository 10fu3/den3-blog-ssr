import React from "react";
import {Divider, Grid, Hidden} from "@mui/material";
import {ArticleHeader} from "./ArticleHeader";
import StyledMarkdown from "./StyledMarkdown";
import CommentBox from "./CommentBox";
import ExternalLinksCard from "../ExternalLinksCard";
import AuthorCard from "../AuthorCard";
import TopicsCard from "./TopicsCard";

export interface BlogAuthor {
    id:string,
    name:string,
    avatar:string,
    bio:string,
    twitter?:string,
    github?:string
}

export interface BlogContentComment {
    author:BlogAuthor,
    body:string,
    date:string
}

export interface BlogTopics {
    avatar: string,
    id: string,
    name: string
}

export interface BlogContentProps {
    markdown:string,
    title:string,
    header_img?:string,
    author:BlogAuthor,
    comment: BlogContentComment[],
    topics: BlogTopics[],
    canComment?:boolean
}

const BlogContent:React.FC<BlogContentProps> = (props)=>{
    return <Grid container justifyContent="center" style={{width:"100%"}}>
        <Grid item style={{width:"100%",maxWidth:"1120px",paddingBottom:32}}>
            <ArticleHeader img={props.header_img}>
                {props.title}
            </ArticleHeader>
            <Hidden lgUp>
                <Grid container justifyContent="center" style={{width:"100%"}}>
                    <Grid item style={{width:"100%"}}>
                        <Grid item style={{width:"calc(100%)"}}>
                            <Grid container style={{width:"calc(100%)"}} justifyContent="center">
                                <Grid item style={{width:"calc(100%)",maxWidth:790}}>
                                    <div style={{width:"calc(100%)",backgroundColor:"white",borderRadius:"12px",padding:30,boxShadow:"0 2px 4px #4385bb12"}}>
                                        {
                                            <TopicsCard topics={props.topics} isMobile/>
                                        }
                                        <StyledMarkdown markdown={props.markdown}/>
                                        <div style={{marginTop:50,marginBottom:20}}>
                                            <Divider/>
                                        </div>
                                        <AuthorCard author={props.author}/>
                                    </div>
                                    <Grid container justifyContent="center">
                                        <Grid item style={{width:"100%",marginTop:20}}>
                                            {
                                                props.canComment ? <Grid container style={{marginTop:40}}>
                                                    <Grid item style={{width:"100%",maxWidth:790,backgroundColor:"white",padding:10,borderRadius:"12px",float:"left",boxShadow:"0 2px 4px #4385bb12"}}>
                                                        <CommentBox comment={props.comment}/>
                                                    </Grid>
                                                </Grid> : <></>
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Grid item style={{marginTop:60,width:"calc(100%)",backgroundColor:"white",borderRadius:12,padding:30,boxShadow:"0 2px 4px #4385bb12"}}>
                                            <ExternalLinksCard/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden lgDown>
                <Grid container style={{height:"calc(100% - 300px)"}}>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <div style={{width:"100%",maxWidth:790,backgroundColor:"white",padding:40,borderRadius:"12px",float:"left",boxShadow:"0 2px 4px #4385bb12"}}>
                                    <StyledMarkdown markdown={props.markdown}/>
                                    <div style={{marginTop:50,marginBottom:20}}>
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
                        {
                            props.canComment ? <Grid container style={{marginTop:40}}>
                                <Grid item style={{width:"100%",maxWidth:790,backgroundColor:"white",padding:10,borderRadius:"12px",float:"left",boxShadow:"0 2px 4px #4385bb12"}}>
                                    <CommentBox comment={props.comment}/>
                                </Grid>
                            </Grid> : <></>
                        }
                    </Grid>
                    <Grid item style={{height:"calc(100%)",marginLeft:30}}>
                        <div style={{width:"300px",height:"100%"}}>
                            <div style={{width:"300px",float:"left",position:"sticky",top:30,bottom:200}}>
                                {
                                    props.topics ? <div style={{marginBottom:40}}>
                                        <TopicsCard topics={props.topics}/>
                                    </div> : <></>
                                }
                                <div style={{marginBottom:44.5}}>
                                    <AuthorCard author={props.author}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    </Grid>
}

export default BlogContent
