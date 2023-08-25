import getNewestPost from "../lib/getNewestPosts";
import Link from "next/link";

export default async function Blog () {
   const lists = await getNewestPost();

  return (
    <div className ="flex justify-center">
    <div className='mt-5 grid-cols-2 grid space-x-4 '>
    {lists.map(list =>{
        return(<div key= {list.id} >
        <img src={list.img}/>
        <h1 className="font-bold">
        <Link href={`/single-blog/${list.id}`}>
        {list.title}
        </Link>
        </h1>
        {list.short}
        </div>)
        
    })}
    </div>
    </div>
    
  )
}

