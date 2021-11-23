import React from 'react'
import {Grid, Link} from "@mui/material";

interface PaginationProps {
    totalCount: number
    currentNum: number
}

export const Pagination:React.FC<PaginationProps> = (props) => {
    const prevPage = props.currentNum - 1;
    const nextPage = props.currentNum + 1;


    const nextNumber = 2;

    const firstPager = props.currentNum - nextNumber >= 0
    const lastPager = props.currentNum + nextNumber < props.totalCount



    return (
        <Grid container>
            {props.currentNum !== 0 && (
                <Grid item>
                    <Link href={`/blog/page/${prevPage}`}>
                        <a>{'<'}</a>
                    </Link>
                </Grid>
            )}
            {
                firstPager ? <Grid item>
                    <Link href={`/blog/page/${0}`}>
                        <a>{0}</a>
                    </Link>
                </Grid> : <></>
            }
            {
                Array.from({length: props.totalCount}, (v, k) => k)
                    .slice(props.currentNum - nextNumber < 0 ? 0 : props.currentNum - nextNumber,
                        props.currentNum+nextNumber > props.totalCount ? props.totalCount : props.currentNum+nextNumber)
                    .map((e,i)=>{
                        return <Link key={i+'-'+Math.random()} href={`/blog/page/${e}`}>
                            <a>{e}</a>
                        </Link>
                    })
            }
            {
               lastPager ? <Grid item>
                    <Link href={`/blog/page/${props.totalCount-1}`}>
                        <a>{props.totalCount-1}</a>
                    </Link>
                </Grid> : <></>
            }

            {props.currentNum !== props.totalCount && (
                <Grid item>
                    <Link href={`/blog/page/${nextPage}`}>
                        <a>{'>'}</a>
                    </Link>
                </Grid>
            )}
        </Grid>
    );
};
export default Pagination
