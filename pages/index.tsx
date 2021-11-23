import {NextPage} from "next";
import {ArticleInfo} from "../model/ArticleInfo";
import Slide from "../component/Slide";
import {BlogListEntity} from "../model/BlogListPage";
import TopExplanation from "../component/TopExplanation";
import TopNews from "../component/TopNews";
import React from "react";
import {Card, Grid} from "@mui/material";
import TopBlogList from "../component/TopBlogList";

const Home:NextPage = ()=>{

    const top:BlogListEntity[] = [
        {
            date: "2021/11/10",
            id: "",
            thumbnail: "http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg",
            title: "私的おすすめChrome拡張機能",
            author:{
                avatar: "http://den3.net/wp-content/uploads/2021/06/whiteshirt-150x150.jpg", bio: "効率よく生きたいです。",name: "WhiteShirt"
            }
        },{
            date: "2021/11/09",
            id: "",
            thumbnail: "http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg",
            title: "【色変】AtCoder水色になりました！",
            author:{
                avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png", bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",name: "うぇいる"
            }
        },{
            date: "2021/10/23",
            id: "",
            thumbnail: "http://den3.net/wp-content/uploads/2021/10/toyosu.jpg",
            title: "ポケモンで芝浦工大を表示する",
            author:{
                avatar: "http://den3.net/wp-content/uploads/2020/04/icon-150x150.jpg", bio: "ゲームの解析、TASの作成してます。",name: "kirby"
            }
        },{
            date: "2021/10/10",
            id: "",
            thumbnail: "http://den3.net/wp-content/uploads/2021/10/ダウンロード.png",
            title: " 俺がAtcoderをやめた理由",
            author:{
                avatar: "http://den3.net/wp-content/uploads/2021/06/photo0000-0732-150x150.jpg", bio: "PythonでAtcoderをしている一般大学生。 プログラミング歴が無駄に長いため自信とプライドがあったが、同期に数週間で抜かされ枕を濡らした経歴がある。",name: "アスファルト"
            }
        },{
            date: "2021/09/10",
            id: "",
            thumbnail: "http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png",
            title: " WindowsでReactの開発環境構築は一癖あった話",
            author:{
                avatar: "http://den3.net/wp-content/uploads/2020/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-05-30-22.52.18-150x150.png", bio: "アプリ作ったり競プロしてる2年生 アニメとか声優・アニソンも好き TrySailって知ってる〜？",name: "tofu"
            }
        }
    ]

    return <div style={{width:"100%"}}>
        {/*<Grid container style={{paddingTop:50,paddingBottom:50}} justifyContent="center">*/}
        {/*    <Grid item style={{width:"100%",maxWidth:"1120px"}}>*/}
        {/*        <Slide list={top}/>*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}
        <Grid container style={{paddingTop:50,paddingBottom:50,width:"100%"}} justifyContent="center">
            <Grid item style={{width:"100%",maxWidth:"1120px"}}>
                <TopExplanation/>
            </Grid>
        </Grid>
        {/*<Grid container style={{width:"100%",backgroundColor:"#e6f2ff"}} justifyContent="center">*/}
        {/*    <Grid item style={{width:"100%",maxWidth:"1120px"}}>*/}
        {/*        <TopNews/>*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}
        <Grid container style={{width:"100%"}} justifyContent="center">
            <Grid item style={{width:"100%",maxWidth:"1120px"}}>
                <TopBlogList e={top}/>
            </Grid>
        </Grid>
    </div>
}

export default Home
