import {GetServerSideProps, GetStaticPaths, NextPage} from "next";
import BlogContent, {BlogContentProps} from "../../../component/blog/BlogContent";
import {SampleMarkdown, SampleMarkdownCode} from "../../../const/Sample";

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

    const data:BlogContentProps = {
        author:{
            avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
            bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
            name: "うぇいる",
            id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
        },
        comment: [
            {
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            },{
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            },{
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "typescript-is では ttypescript 依存の transformer の機能を使用してビルドファイルの中にランタイムチェック関数を生成しますが、type-predicates-generator はトランスパイル前のコードとしてランタイムチェック関数を書き出します。型を変える度にコード生成をする(あるいは watch しておく)デメリットはありますが、挙動は暗黙的になりにくいです\n" +
                    "\n" +
                    "あとは、バンドルサイズには結構差が出るはずです。typescript-is は is<型> の箇所に毎回すべてのランタイムチェック関数(プリミティブ型のチェックからその他諸々)を生成するはずなので。type-predicates-generator は対象ファイルから一括で単一のファイルにランタイムチェック関数を作成するという仕様上、チェック関数の共通化がしやすいです。プリミティブ型や Union 型等のチェック関数はすべて共通のものを使用していますし、例えば Task[] の型チェックには定義済みの isTask 関数を使用します。結果、使用量が多いほどバンドルサイズの差は大きくなると思います\n",
                date: "2021/02/11 08:10:11"
            }
        ],
        header_img: "http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png",
        markdown: SampleMarkdownCode,
        title: "【色変】AtCoder水色になりました！",
    }

    return {
        props:data
    }
}

const BlogPage:NextPage<BlogContentProps> = (props)=>{

    const blogdata:BlogContentProps = props

    return <BlogContent {...blogdata} canComment/>
}

export default BlogPage
