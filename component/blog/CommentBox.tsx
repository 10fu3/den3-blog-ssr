import {Avatar, Button, Divider, Grid, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import React, {useState} from "react";
import {BlogContentComment} from "./BlogContent";

function calcTextAreaHeight(value:string){
    let rowsNum = value.split('\n').length;
    return rowsNum
}

const CommentBox:React.FC<{comment:BlogContentComment[]}> = (props)=>{

    const [text,setText] = useState('');

    return <div style={{width:"100%",borderRadius:12,backgroundColor:"white",padding:"20px 30px 0px 30px"}}>
        <h2 style={{textAlign:"center",color:"#333"}}>Comments</h2>
        <Divider/>

        {
            props.comment.map((e,i)=>{
                return <div key={i+'-'+Math.random()+'-'+Math.random()}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={e.author.avatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={e.author.name}
                            secondary={<div>
                                <p>{e.date}</p>
                                <p style={{lineHeight:1.7,letterSpacing:0.3}}>{e.body}</p>
                            </div>}
                        />
                    </ListItem>
                    <Divider/>
                </div>
            })
        }

        <div style={{padding:10}}>
            <textarea style={{
                border:"none",
                width:"100%",
                resize:"none",
                minHeight:"168px",
                fontSize:15,
                outline:0
            }}
                placeholder={"ブログにコメントする"}
                onChange={(e)=>{setText(e.target.value)}}
                rows={calcTextAreaHeight(text)}
            />
            <Divider/>
            <Grid container>
                <div style={{flexGrow:1}}/>
                <Grid item>
                    <Button style={{float:'left',marginTop:20}} variant="contained">
                        投稿する
                    </Button>
                </Grid>
            </Grid>
        </div>

    </div>
}

export default CommentBox
