import {NextComponentType} from "next";
import {Grid, Typography} from "@mui/material";
import {CIRCLE_COLOR, LOGO} from "../../const";

const TopBarLogo:NextComponentType = ()=>{
    return <Grid container>
        <Grid item>
            <img src={LOGO} style={{height:48,width:"auto"}}/>
        </Grid>
        <Grid item style={{width:10,height:48,marginLeft:10,backgroundColor:CIRCLE_COLOR}}/>
        <Grid item style={{marginLeft:10,color:CIRCLE_COLOR}}>
            <Typography style={{fontWeight:"bold",fontFamily:"mame4"}}>
                芝浦工業大学
            </Typography>
            <Typography style={{fontWeight:"bold",fontFamily:"mame4"}}>
                電子計算機研究会
            </Typography>
        </Grid>
    </Grid>
}

export default TopBarLogo;
