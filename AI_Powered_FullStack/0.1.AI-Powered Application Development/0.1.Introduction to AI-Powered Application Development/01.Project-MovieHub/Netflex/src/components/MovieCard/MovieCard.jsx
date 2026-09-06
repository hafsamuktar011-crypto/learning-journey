import React from 'react'
import styles from './MovieCard.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { BiPlusCircle } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

function MovieCard({movie}) {
  console.log(movie);
  

    let genres=["Adventure","Action","Trailor"]
  return (
    <div className={styles.cardrapper}>
      {/* poster img */}
        <img
          className={styles.poster}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt={movie?.title || movie?.name}
        />


      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
      <img
           className={styles.poster}
           src={`${IMAGE_BASE}${movie?.poster_path}`}
           alt={movie?.title || movie?.name}
         />

        {/* badge */}
        <div className={styles.badge}>Recently added</div>
        {/* button row */}
        <div className={styles.buttonsRow}>
            <FaCirclePlay className={styles.circleButton} 
             color='white' size={40}/>
            <BiPlusCircle className={styles.circleButton} 
            color='white' size={40}/>
            <GoCheckCircleFill className={styles.circleButton} 
            color='white' size={40}/>
            <IoIosArrowDropdownCircle className={styles.circleButtonSmall}
            color='white' size={40}/>
        </div>

        {/* metadata row */}
        <div className={styles.metaRow}>
            <span className={styles.tag}>U/A 16+</span>
            <span className={styles.tag}>Movie</span>
            <span className={styles.tag}>ID</span>
        </div>

        {/* movie genres */}
        <div className={styles.genre}>
{
    genres?.map((g,index) => {
return(
<span key={index}>
{g}
{index < genres.length-1 &&  <span className={styles.dot}>•</span>}
</span>
) 
    })
}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
