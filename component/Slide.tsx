import React from "react";
import {BlogListEntity} from "../model/BlogListPage";


import HoverBlogItem from "./HoverBlogItem";
import {Grid} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// swiper core styles
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination]);


const Slide:React.FC<{list:BlogListEntity[]}> = (props)=>{

    const display = props.list.map((e,i)=>{
        return <SwiperSlide key={'swiper-'+e.title}>
            <HoverBlogItem e={e} height={370} big/>
        </SwiperSlide>
    })

    return <div style={{width:"100%",height:370}}>
        <Grid container justifyContent="center" style={{width:"100%"}}>
            <Grid item style={{width:"100%",backgroundColor:"white",padding:10}}>
                <Swiper
                    navigation
                    pagination={{
                        "clickable": true,
                    }}
                    style={{height:370}}
                    spaceBetween={20}
                    centeredSlides={true}
                    breakpoints={{
                        830: {
                            slidesPerView: 2,
                        },
                        822: {
                            slidesPerView: 1,
                        }
                    }}
                    observer
                    observeParents
                    loop
                >
                    {
                        display
                    }
                </Swiper>
            </Grid>
        </Grid>
    </div>
}

export default Slide