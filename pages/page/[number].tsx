import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import {SampleBlogList} from "../../const/Sample";
import {BlogListEntity} from "../../model/BlogListPage";
import BlogListComponent from "../../component/BlogListComponent";

const PER_PAGE = 12

const range = (start:number, end:number) => [...Array((end - start + 1) >= 0 ? end - start + 1 : 0)].map((_, i) => start + i)

export const getStaticPath:GetStaticPaths = async () => {

    const repos = {
        totalCount: SampleBlogList.length,
    }

    const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/page/${repo}`)

    return {
        paths,
        fallback: false
    }
}

interface Props{
    list:BlogListEntity[]
}

export const getServerSideProps:GetStaticProps<Props> = async ()=>{

    return {
        props:{
            list:SampleBlogList
        }
    }
}

const BlogListPage:NextPage = (props)=>{

    if (useRouter().isFallback) {
        return <div>Loading...</div>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const number = Number(useRouter().query['number'])

    const data = SampleBlogList

    const _data = range(number*PER_PAGE,(number+1)*(PER_PAGE-1)).map(i=>data[i])

    return <div>
        <BlogListComponent e={_data}/>
    </div>
}

export default BlogListPage
