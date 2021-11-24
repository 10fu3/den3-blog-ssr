import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import {SampleBlogList} from "../../../const/Sample";
import {BlogListEntity} from "../../../model/BlogListPage";
import BlogListComponent from "../../../component/BlogListComponent";
import {Grid} from "@mui/material";
import Pagination from "../../../component/Pagination";

export const PER_PAGE = 12

const range = (start:number, end:number) => [...Array((end - start + 1) >= 0 ? end - start + 1 : 0)].map((_, i) => start + i)

interface Props{
    list:BlogListEntity[]
}

export const getServerSideProps:GetServerSideProps<Props> = async ()=>{

    return {
        props:{
            list: SampleBlogList
        }
    }
}

const BlogListPage:NextPage<Props> = (props)=>{

    if (useRouter().isFallback) {
        return <div>Loading...</div>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const number = Number(useRouter().query['number'])

    const data = range((number-1)*PER_PAGE,((number)*PER_PAGE)-1).map(i=>props.list[i])

    return <div>
        <Grid container justifyContent="center">
            <Grid item style={{width:"100%",maxWidth:"1120px",padding:"32px 10px 64px 10px"}}>
                <BlogListComponent e={data}/>
            </Grid>
            <Grid container justifyContent="center" style={{marginBottom:64}}>
                <Grid item>
                    <Pagination totalCount={props.list.length} currentNum={number}/>
                </Grid>
            </Grid>
        </Grid>
    </div>
}

export default BlogListPage
