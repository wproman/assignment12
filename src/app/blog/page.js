import getNewestPost from "../lib/getNewestPosts";
import Link from "next/link";

export default async function Blog () {
   const lists = await getNewestPost();

  return (
    <div className ="flex justify-center">
    <div className='mt-5 grid-cols-2 grid space-x-4 '>
    {lists.map(list =>{
        return(<div key= {list.id} >
            <Link href={`/single-blog/${list.id}`}>
        <img src={list.img}/>
        <h1 className="font-bold">
       
        {list.title}
       
        </h1>
        {list.short}
        </Link>
        </div>)
        
    })}
    </div>
    </div>
    
  )
}

