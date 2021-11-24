import {NextPage} from "next";
import {MiddleText} from "./blog/TextComponent";
import {Divider, Grid} from "@mui/material";
import Link from "next/link";

export interface ExternalLink {
    name:string,
    url:string
}

const ExternalLinksCard:NextPage = ()=>{

    const list:ExternalLink[] = [
        {
            name: "芝浦工業大学 HP", url: "https://www.shibaura-it.ac.jp/"
        },{
            name: "数理科学研究会 HP", url: "http://sitmathclub.web.fc2.com/"
        },{
            name: "DEN3 部室記録", url: "https://ambidata.io/ch/channel.html?id=7710"
        }
    ]

    return <div style={{backgroundColor:"#fdfdfd",padding:10}}>
        <MiddleText isCenter>
            <Grid item>
                <div style={{fontSize:"14px",fontWeight:"bold"}}>外部リンク</div>
            </Grid>
        </MiddleText>
        <Grid container justifyContent="center">
            <Grid item style={{width:"100%",marginTop:20}}>
                {
                    list.map((e,i)=>{
                        return <div key={"external-"+i} style={{cursor:"pointer",textAlign:"center"}}>
                            <Link href={e.url}>
                                <a>
                                    <div>
                                        <div style={{margin:10,fontSize:"15px"}}>
                                            {e.name}
                                        </div>
                                        <Divider/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    })
                }
            </Grid>
        </Grid>
    </div>
}

export default ExternalLinksCard
