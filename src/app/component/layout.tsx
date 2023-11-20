import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import style from "../layout.module.css"

const inter = Inter({ subsets: ['latin'] })
type IProp={
    children: React.ReactNode,
    seo?: React.ReactNode
}
export default function Layout({ children }:IProp) {
return (
    <main>
    <div className={style.spacing}>
    <Image className={style.image}
    src={"/images/office 1.0.jpeg"}
    height={150}
    width={150}
    alt='My photo'
    />
    <h1 className={style.heading}>Muhammd Ahsaan Abbasi</h1>
    </div>
    {children}
    </main>
)
}