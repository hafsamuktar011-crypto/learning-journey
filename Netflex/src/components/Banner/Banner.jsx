import React, { useEffect, useState } from 'react'
import NetflexBannerLogo from '../../assets/images/marshals (3).webp'
import {Play,Info} from "lucide-react"
import styles from './Banner.module.css'
import { movieInstance } from '../../utility/MoviesInstance';
import requests from '../../utility/requestUrl';


const BANNER_BASE= "https://image.tmdb.org/t/p/original/"

function Banner() {


  const [bannerImage,setBannerImage]=useState({})

useEffect(()=>{
  async function fetchBannerImage(params) {
    const request=await movieInstance.get(requests.fetchNetflixOriginals)
setBannerImage(
  request.data.results[Math.floor(Math.random()*request.data.results.length)]
)

  }
  fetchBannerImage()
},[])

console.log(bannerImage);

function trunctor(str,n){
  return str ?.length>n ? str.substr(0,n-1)+"..." :str
}

  return (
    <div className={styles.Banner}
    style={
      {backgroundSize:"cover",
        backgroundImage:`url("${BANNER_BASE}${bannerImage.backdrop_path}")`
      }
    }>

      <div className={styles.contents}>

{/* netflex image */}
<img className={styles.logoimg}
src={NetflexBannerLogo} alt="Netflex Logo" />

{/* title */}
<h1 className={styles.title}>{bannerImage?.original_name}</h1>

{/* description */}
<h1 className={styles.description}>
{trunctor(bannerImage?.overview,100)}</h1>

{/* button */}
<div className={styles.buttonContainer}>
  <button className={styles.button}>
    <Play size={30}/>
    Play</button>
  <button className={styles.button}>
    <Info size={30}/>
    My list</button>
</div>
      </div>
      {/* fading */}
      <div className={styles.fadeBottom}>

      </div>
    </div>
  )
}

export default Banner
