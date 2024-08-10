import Link from "next/link"
import Image from "next/image"
import logoImg from '@/assets/logo.png'
import css from '@/components/main-header/main-header.module.css'
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"

export default function MainHeader(){
    return <>
    <MainHeaderBackground/>
     <header className = {css.header}> 
    <Link href = "/" className = {css.logo}>
        <Image src = {logoImg} alt = "A plate with food on it" priority />
        DineHub
    </Link>

    <nav className = {css.nav}>
       <ul>
        <li>
           <NavLink href = '/meals'>
            Browse Meals
            </NavLink>
        </li>
        <li>
        <NavLink href = '/community' >
            Foodies Community
        </NavLink> 
           
        </li>
       </ul> 
    </nav>
    </header>
    </>

}