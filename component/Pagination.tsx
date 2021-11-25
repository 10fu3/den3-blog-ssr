import React from 'react'
import {Grid, Link} from "@mui/material";
import {PER_PAGE} from "../pages/blog/page/[number]";
import {CIRCLE_COLOR} from "../const";
import Hover from "./Hover";

interface PaginationProps {
    totalCount: number
    currentNum: number
}


const getPageNumbers = (currentPage:number,
                        pageSize:number,
                        total:number,
                        pageNumbersToShow = 3) => {



    const lastPageNumber = Math.ceil(total / pageSize)
    const currentPageNumber =
        currentPage <= lastPageNumber ? currentPage : lastPageNumber
    const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2)
    const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1
    let startPage = 1
    let endPage = lastPageNumber

    if (lastPageNumber <= 1) {
        return [] // Don't show numbers if there's only 1 page
    }

    if (currentPageNumber <= maxPagesBeforeCurrentPage) {
        // near the start
        startPage = 1
        endPage = pageNumbersToShow
    } else if (currentPageNumber + maxPagesAfterCurrentPage >= lastPageNumber) {
        // near the end
        startPage = lastPageNumber - pageNumbersToShow + 1
    } else {
        // somewhere in the middle
        startPage = currentPageNumber - maxPagesBeforeCurrentPage
        endPage = currentPageNumber + maxPagesAfterCurrentPage
    }

    let pageNumbers:any[] = Array.from(Array(endPage + 1 - startPage).keys())
        .map((pageNumber) => startPage + pageNumber)
        .filter((pageNumber) => pageNumber <= lastPageNumber && pageNumber > 0)

    if (pageNumbers[0] > 1) {
        if (pageNumbers[0] <= 2) {
            pageNumbers = [1, ...pageNumbers]
        } else {
            const ellipsis = pageNumbers[0] > 3 ? '...' : 2
            pageNumbers = [1, ellipsis, ...pageNumbers]
        }
    }

    if (pageNumbers[pageNumbers.length - 1] !== lastPageNumber) {
        if (pageNumbers[pageNumbers.length - 1] === lastPageNumber - 1) {
            pageNumbers = [...pageNumbers, lastPageNumber]
        } else {
            const ellipsis =
                pageNumbers[pageNumbers.length - 1] < lastPageNumber - 2
                    ? '...'
                    : lastPageNumber - 1
            pageNumbers = [...pageNumbers, ellipsis, lastPageNumber]
        }
    }

    return pageNumbers
}

export const Pagination:React.FC<PaginationProps> = (props) => {

    return (
        <Grid container>
            {
                getPageNumbers(props.currentNum,PER_PAGE,props.totalCount,3).map(i=>{
                    return i === '...' ? <Grid item>
                        <div key={Math.random()+'-'+Math.random()}>
                            <div style={{width:24,height:24,margin:"0px 10px",borderRadius:"50%",textAlign:"center"}}>
                                ...
                            </div>
                        </div>
                    </Grid>: Number(i) === props.currentNum ? <Grid item>
                        <div style={{width:36,height:36,paddingTop:6,margin:"0px 10px",borderRadius:"50%",color:"white",backgroundColor:CIRCLE_COLOR,textAlign:"center"}}>
                            {i}
                        </div>
                    </Grid> : <Grid item>
                        <Link href={'/blog/page/'+(Number(i))} style={{textDecoration:"none"}} key={Math.random()+'-'+Math.random()}>
                            <a>
                                <Hover onHover={<div style={{width:36,height:36,paddingTop:6,margin:"0px 10px",borderRadius:"50%",backgroundColor:"gray",textAlign:"center",color:"white"}}>
                                    {i}
                                </div>}>
                                    <div style={{width:36,height:36,paddingTop:6,margin:"0px 10px",borderRadius:"50%",backgroundColor:"white",textAlign:"center",color:"black"}}>
                                        {i}
                                    </div>
                                </Hover>
                            </a>
                        </Link>
                    </Grid>
                })
            }
        </Grid>
    );
};
export default Pagination
