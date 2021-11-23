import {Divider} from "@mui/material";
import React from "react";
import {BlogContentComment} from "./BlogContent";

const CommentBox:React.FC<{comment:BlogContentComment[]}> = (props)=>{
    return <div style={{width:"100%",borderRadius:12,backgroundColor:"white"}}>
        <h2 style={{textAlign:"center",color:"#333"}}>Comments</h2>
        <Divider/>
    </div>
}

export default CommentBox