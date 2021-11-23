import {NextPage} from "next";
import {useRouter} from "next/router";

export async function getStaticPath() {

}

const BlogListPage:NextPage = (props)=>{

    const number = Number(useRouter().query['number'])

    return <div>
        {
            JSON.stringify(number)
        }
    </div>
}

export default BlogListPage
