import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from "next";
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

    const data = range(number*PER_PAGE,((number+1)*PER_PAGE)-1).map(i=>props.list[i])

    return <div>
        <Grid container justifyContent="center">
            <Grid item style={{width:"100%",maxWidth:"1120px",padding:"32px 10px 128px 10px"}}>
                <BlogListComponent e={data}/>
                <Pagination totalCount={Math.round(props.list.length/PER_PAGE)} currentNum={number}/>
            </Grid>
        </Grid>
    </div>
}

export default BlogListPage
