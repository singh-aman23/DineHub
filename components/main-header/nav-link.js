'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import css from '@/components/main-header/main-header.module.css'


export default function NavLink({href, children}){
    const path = usePathname();
    return <Link href = {href} className = {path.startsWith(href) ? css.active : undefined}>{children}</Link> 
}