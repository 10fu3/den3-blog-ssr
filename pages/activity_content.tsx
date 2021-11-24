import {GetStaticProps, NextPage} from "next";
import StyledMarkdown from "../component/blog/StyledMarkdown";
import {STATIC_API_HOST} from "../const/Links";
import {useEffect, useState} from "react";
import {Avatar, Grid, Hidden, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {ArticleHeader} from "../component/blog/ArticleHeader";
import {GITHUB_ICON, TWITTER_ICON} from "../const/Icon";
import TwitterTimeline from "../component/TwitterTimeline";
import ExternalLinksCard from "../component/ExternalLinksCard";
import CommentBox from "../component/blog/CommentBox";
import BlogContent from "../component/blog/BlogContent";

// ビルド時に実行される
export const getStaticProps: GetStaticProps<{markdown:string|undefined,status:'error'|'success',message:string|null}> = async (context) => {

    const res = await fetch(STATIC_API_HOST+'information.json')

    if(res.status !== 200){
        return {
            props: {
                markdown:undefined,
                status:'error',
                message:'information_not_found'
            }
        }
    }else{
        const url:{description:undefined} = await res.json()

        const description = await fetch(STATIC_API_HOST+url.description)

        if(description.status !== 200){
            return {
                props: {
                    markdown:undefined,
                    status:'error',
                    message:'body_not_found'
                }
            }
        }else{

            return {
                props: {
                    markdown:await description.text(),
                    status:'success',
                    message:null
                }
            }
        }
    }
};


const ActivityContent:NextPage<{markdown:string|undefined,status:'error'|'success',message:string|undefined}> = (props)=>{

    const markdown = props.markdown

    return markdown ?
        <BlogContent
            comment={[]}
            markdown={markdown}
            title={'活動内容'}
            author={
                {
                    avatar: "https://pbs.twimg.com/profile_images/1222821269462142976/kXOsMek1_normal.jpg",
                    bio: "コンピューターをテーマに様々なことに取り組んでいます",
                    name: "電子計算機研究会",
                    twitter: 'https://twitter.com/sit_densan',
                    github: 'https://github.com/Den-3'
                }
            }
        /> : <div></div>
}
export default ActivityContent
