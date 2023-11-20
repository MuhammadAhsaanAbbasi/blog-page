import Layout from "@/app/component/layout"
import { getAllPostsIds, getPostData } from "../../lib/post";
import Date from "@/app/component/date";
import Link from "next/link";
import style from "@/app/layout.module.css"


export async function getStaticPaths() {
    const paths = getAllPostsIds().map((post) => ({
        params: { id: post.params.id },
    }));
    return {
        paths,
        fallback: false,
    }
}


interface PostData {
    id: string;
    title?: string;
    date: string;
    contentHtml: string
    // Add other properties if present in the matter content
}

export default async function Post(postData:any){
    const dataMain: PostData = await getPostData(postData.params.id)
    return(
        <div className={style.spacing}>
        <Layout>
        <title>{dataMain.id}</title>
        <h1 className={style.heading}>{dataMain.title}</h1>
        <br />
        <h2 className={style.date}><Date dateString = {dataMain.date}/></h2>
        <br />
        {dataMain.contentHtml}
        {/* <div dangerouslySetInnerHTML = {{__html:dataMain.contentHtml}}/> */}
        <Link href="/" style={{textDecoration:'underline'}}>{"<- Back To Home"}</Link>
    </Layout>
    </div>
    )
}

