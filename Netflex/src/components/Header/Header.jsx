import React,{useEffect, useState}from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/marshals (3).webp";
import {Link} from "react-router-dom"
import {Search,Bell,User,ChevronDown, Code} from 'lucide-react'

function Header() {

  const [isSearchOpen,setisSearchOpen]=useState(false)
  const [isProfileOpen,setisProfileOpen]=useState(false)

// for blur
const [isScrolled,setIsScrolled]=useState(false)

useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>50){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return()=>window.removeEventListener('scroll',handleScroll)
},[])

  return (
    <header className={isScrolled ? styles.scrolled :styles.header}>
      <div className={styles.container}>
      {/* logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* navigation links */}
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="">Tv Shows</Link>
        <Link className={styles.navLink} href="">Home</Link>
        <Link className={styles.navLink} href="">movies</Link>
        <Link className={styles.navLink} href="">New & Popular</Link>
        <Link className={styles.navLink} href="">My Lists</Link>
        <Link className={styles.navLink} href="">Browse by Language</Link>

      </nav>

       {/* right side section */}

      <div className={styles.rightSection}>
        {/*search*/}
          <div className={styles.SearchContainer}>
            <button className={styles.searchbtn}
            onClick={()=>{setisSearchOpen(!isSearchOpen)}}>
            <Search size={20} />
            </button>
            {
              isSearchOpen && (
                <input type="text" placeholder="Movie title" id={styles.searchInput} />
              )
            }
          </div>

        {/*Notification*/}
          <button className={styles.iconbtn}>
            {/* notification icon */}
            <Bell size={20}/>
            <span className={styles.notificationbadge} >3</span>
          </button>

        {/*profile */}

        <div className={styles.profileContainer}>
          <button 
          onClick={()=>{setisProfileOpen(!isProfileOpen)}}
          className={styles.profilebtn}>
            {/* user icon */}
            <div className={styles.profileAvatar}>
              <User size={20}/>
            </div>
         {/* drop down icon */}
         <ChevronDown size={20} className={styles.dropDown}/>
          </button>
          {isProfileOpen && (
          <div className={styles.profileMenu}>
            <Link id={styles.profileMenuItem}>Account</Link>
            <Link id={styles.profileMenuItem}>help Center</Link>
            <hr className={styles.profileMenuDivider} />
            <button id={styles.profileMenuItem}>Sign out</button>
          </div>)
          }
        </div>
      </div>

      </div>
    </header>
  );
}

export default Header;