import Layout from "./component/layout";
import { Metadata } from "next";
import Link from "next/link";
import { getSortedPostsData } from "../app/lib/post";
import Date from "./component/date";
import style from "./layout.module.css";

export const metadata: Metadata = {
  title: 'Home Page',
}

export default async function Home() {
  const res = getSortedPostsData()
    return (
    <Layout>
        <section className={style.spacing}>
          <h2 className={style.heading}>Welcome to NextJs</h2>
            <p className={style.para}>Hey, My self Muhammad Ahsaan Abbasi. I am a passionate web developer and programmer. Tech enthusiast</p>
        <p className={style.para}>You can connect with me on <a href={"https://www.linkedin.com/in/muhammad-ahsaan-abbasi-995630263/"}>LinkdIn</a></p>
        <p className={style.para}>Innovative Frontend Developer || Expert in Modern Technologies || Transforming Visions into Immersive Digital Experiences || HTML || CSS || TypeScript || Node Js || React Js || Next Js || Tailwind CSS || Block-Chain</p>
            {/* <p className={style.para}>This is a simple webiste you'll be building a site like this on{""} <a href="https://nextjs.org/">Our Next.js</a></p> */}
    </section>
    <section className={style.spacing}>
        <h2 className={style.heading2}>Blog</h2>
    <ul className={style.para}>
        {res 
        && Array.isArray(res)&&
        res.map(({id,date,title}:any)=>(
          <li key={id}>
          <Link href={`/post/${id}`}>{title}</Link>
          <br />
          <small className={style.date}>
            <Date dateString={date}/>
          </small>
          </li>
))}
    </ul>
      </section>
    </Layout>
)
}

