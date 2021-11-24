import {GetStaticProps, NextPage} from "next";
import {STATIC_API_HOST} from "../const/Links";
import BlogContent from "../component/blog/BlogContent";

interface Props {
    markdown:string|undefined,
    status:'error'|'success',message:string|null
}

// ビルド時に実行される
export const getStaticProps: GetStaticProps<Props> = async (context) => {

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
        const url:{suggest:undefined} = await res.json()

        const description = await fetch(STATIC_API_HOST+url.suggest)

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

const LinkPage:NextPage<Props> = (props)=>{
    const markdown = props.markdown

    return markdown ?
        <BlogContent
            comment={[]}
            markdown={markdown}
            title={'プログラムの勉強に関するおすすめリンク'}
            author={
                {
                    avatar: "https://pbs.twimg.com/profile_images/1222821269462142976/kXOsMek1_normal.jpg",
                    bio: "コンピューターをテーマに様々なことに取り組んでいます",
                    name: "電子計算機研究会",
                    twitter: 'https://twitter.com/sit_densan',
                    github: 'https://github.com/Den-3'
                }
            }
        /> : <></>
}

export default LinkPage
