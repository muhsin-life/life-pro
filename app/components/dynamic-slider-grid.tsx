import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useWindowSize } from '@react-hook/window-size'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import ImgPage from "./img-page";
const DynamicSliderGrid = ({ data, isDesktop, isMobile }) => {


    if (isDesktop === false && isMobile === false) {
        return <></>
    }

    return <>

        {data.settings.show_section_title ?
            <div className="text-lg text-center my-3">{data.section_title}</div>
            : ""}
        <Swiper
            slidesPerView={isDesktop ? data.settings.desktop.column : data.settings.mobile.column}
            pagination={data.settings.show_pagination === true ? { dynamicBullets: true } : false}
            // onPaginationHide={data.settings.show_pagination === true}
            navigation={data.settings.navigation ? true : false}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={data.settings.autoplay ? true : false}
            spaceBetween={20}
            className="mySwiper mx-auto">

            {data.section_data_array.map(sec_data => (
                <SwiperSlide>
                    {(sec_data.desktop.image_url || sec_data.mobile.image_url) &&
                        <ImgPage sectionData={sec_data} isDesktop={isDesktop} isMobile={isMobile} m_height={null} m_width={null}/>
                    }
                </SwiperSlide>
            ))}
        </Swiper>
    </>

}

export default DynamicSliderGrid;