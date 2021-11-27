import {GetServerSideProps, GetStaticPaths, NextPage} from "next";
import BlogContent, {BlogContentProps} from "../../../component/blog/BlogContent";
import {SampleBlogArticle, SampleMarkdown, SampleMarkdownCode} from "../../../const/Sample";

// export const getStaticPaths:GetStaticPaths = async ()=>{
//     return {
//         paths: [{
//                 params: {
//                     id: '001'
//                 }}, {
//                 params: {
//                     id: '002'
//                 }}, {
//                 params: {
//                     id: '003'
//                 }}],
//         fallback: true
//     }
// }

export const getServerSideProps:GetServerSideProps<BlogContentProps> = async (props)=>{

    const r = Math.floor(Math.random() * 10) % 2;
    console.log(r);
    const data:BlogContentProps = SampleBlogArticle[r]

    return {
        props:data
    }
}

const BlogPage:NextPage<BlogContentProps> = (props)=>{

    const blogdata:BlogContentProps = props

    return <BlogContent {...blogdata} canComment/>
}

export default BlogPage
