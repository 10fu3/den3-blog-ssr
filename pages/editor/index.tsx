import {NextPage} from "next";
import {AppBar, Card, Grid, Hidden, IconButton, Toolbar} from "@mui/material";
import React, {ChangeEvent, useRef, useState} from "react";
import {BACK_ARROW_ICON, PEN_ICON, PLAY_ICON} from "../../const/Icon";
import {useRouter} from "next/router";
import StyledMarkdown from "../../component/blog/StyledMarkdown";

const Editor:NextPage = ()=>{

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const [editorMode,setEditorMode] = useState<boolean>(true)

    const router = useRouter();

    const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setTitle(e.target.value);
    }

    const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setBody(e.target.value);
    }

    return <div style={{height:"100%"}}>
        <div style={{width:"100%",boxShadow:"0 0 8px #1f193c1a"}}>
            <Toolbar>
                <IconButton onClick={()=>{router.back()}}>
                    {BACK_ARROW_ICON}
                </IconButton>
            </Toolbar>
        </div>
        <Grid container justifyContent="center" style={{width:"100%",margin:"27px 0px"}}>
            <Grid item style={{width:880}}>
                <div style={{padding:"0px 20px"}}>
                    <textarea style={{
                        border:"none",
                        width:"100%",
                        resize:"none",
                        minHeight:"56px",
                        height:"auto",
                        fontSize:28,
                        outline:0,
                        backgroundColor:"rgba(0,0,0,0)"
                    }}
                              value={title}
                              placeholder={"タイトル"}
                              onChange={onChangeTitle}
                    />
                </div>
                <Grid container style={{width:"100%"}}>
                    <Hidden smUp>
                        <Grid item style={{width:"calc(100%)",padding:"0px 20px"}}>
                            <div style={{padding:"20px 8px",width:"100%",borderRadius:10,backgroundColor:"white"}}>
                                <div style={{padding:10}}>
                                    {
                                        editorMode ? <textarea style={{
                                            border:"none",
                                            width:"100%",
                                            resize:"none",
                                            minHeight:"56px",
                                            fontSize:15,
                                            outline:0,
                                            height:"auto",
                                            backgroundColor:"rgba(0,0,0,0)",
                                            fontFamily:"游ゴシック, Yu Gothic, Hiragino Kaku Gothic ProN, ヒラギノ角ゴ ProN W3, sans-serif"
                                        }}
                                            value={body}
                                            placeholder={"マークダウン記法で書いてください"}
                                            onChange={onChangeBody}
                                        /> : <StyledMarkdown markdown={body}/>
                                    }
                                </div>
                            </div>
                        </Grid>
                        <div style={{position:"sticky",marginTop:10,bottom:20,width:"100%"}}>
                            <Grid container justifyContent="center" style={{width:"100%"}}>
                                <Grid item>
                                    <Grid container justifyContent="center" style={{height:42,backgroundColor:"#e5e5e5",borderRadius:"25px",padding:4}}>
                                        <Grid item>
                                            <IconButton onClick={()=>{setEditorMode(true)}} style={{height:36,width:36,color: editorMode ? "white" : "#c6d5e2",backgroundColor: editorMode ? "#c6d5e2" : "#fff"}}>
                                                {PEN_ICON}
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={()=>{setEditorMode(false)}} style={{height:36,width:36,marginLeft:6,color: !editorMode ? "white" : "#c6d5e2",backgroundColor: !editorMode ? "#c6d5e2" : "#fff"}}>
                                                {PLAY_ICON}
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </div>
                    </Hidden>
                    <Hidden smDown>
                        <Grid item style={{width:"calc(100% - 110px)",padding:"0px 20px"}}>
                            <div style={{padding:"20px 8px",width:"100%",borderRadius:10,backgroundColor:"white"}}>
                                <div style={{padding:10}}>
                                    {
                                        editorMode ? <textarea style={{
                                            border:"none",
                                            width:"100%",
                                            resize:"none",
                                            minHeight:"56px",
                                            fontSize:15,
                                            outline:0,
                                            height:"auto",
                                            backgroundColor:"rgba(0,0,0,0)",
                                            fontFamily:"游ゴシック, Yu Gothic, Hiragino Kaku Gothic ProN, ヒラギノ角ゴ ProN W3, sans-serif"
                                        }}
                                            value={body}
                                            placeholder={"マークダウン記法で書いてください"}
                                            onChange={onChangeBody}
                                        /> : <StyledMarkdown markdown={body}/>
                                    }
                                </div>
                            </div>
                        </Grid>
                        <Grid item style={{width:"110px",paddingRight:20}}>
                            <div style={{width:"100%",height:42,backgroundColor:"#fff",borderRadius:"25px",position:"sticky",top:120}}>
                                <Grid container>
                                    <Grid item>
                                        <IconButton onClick={()=>{setEditorMode(true)}} style={{height:36,width:36,marginTop:3,marginLeft:6,color: editorMode ? "white" : "#c6d5e2",backgroundColor: editorMode ? "#c6d5e2" : "#fff"}}>
                                            {PEN_ICON}
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={()=>{setEditorMode(false)}} style={{height:36,width:36,marginTop:3,marginLeft:6,color: !editorMode ? "white" : "#c6d5e2",backgroundColor: !editorMode ? "#c6d5e2" : "#fff"}}>
                                            {PLAY_ICON}
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </Grid>
    </div>
}

export default Editor
