import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// interface PostData {
//     id: string;
//     date: string; // Assuming date is a string; adjust the type accordingly
//      // Add other properties if they exist in your data
// }

const PostsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){

    const fileNames = fs.readdirSync(PostsDirectory);
    const allPostsData = fileNames.map((fileName: string) => {

    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(PostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
        id,
        ...matterResult.data,
      }  // Type assertion to specify the type
    });

    return allPostsData.sort((a, b) => {
    if (a.id<b.id) {
        return 1;
    } else {
        return -1;
    }
    });
}

export function getAllPostsIds(){
    const fileNames = fs.readdirSync(PostsDirectory);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

interface PostData {
    id: string;
    title: string;
    date: string;
    // Add other properties if present in the matter content
  }

export async function getPostData(id:string){
    const fullPath = path.join(PostsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath,'utf8');
    
    const matterResult:{content:string,data:any} = matter(fileContents);

    const processedContent = await remark()
        . use(html)
        .process(matterResult)
    const contentHtml = processedContent.toString()
    return{
        id,
        contentHtml,
        ...matterResult.data,
    }
}

