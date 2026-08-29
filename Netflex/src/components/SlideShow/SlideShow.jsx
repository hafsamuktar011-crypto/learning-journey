import React from 'react'
import styles from './SlideShow.module.css'
import MovieCard from '../MovieCard/MovieCard'
import { movies } from './../../Data/Data';

import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';


function SlideShow({title,movies}) {
    console.log(movies);
    
  return (
    <div className={styles.title}>
        <h2>{title}</h2>
      
      <div className={styles.Row}>
        <Swiper 
        modules={[Navigation]}
        navigation
        spaceBetween={10} 
        slidesPerView={6.8}
        >
             {movies?.map((movie)=>(
                <SwiperSlide key={movie.id} >
            <MovieCard  movie={movie}/>

                </SwiperSlide>

    ))}
        </Swiper>
       
      </div>
    </div>
  )
}

export default SlideShow
