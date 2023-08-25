import getPostList from "@/app/lib/getSinglePost"

export default async function singlePage({params}){
    const id = params.id;
    const singPost = await getPostList(id);
    console.log(singPost);
    return(
        <div>
            <section>
               <div>
               {<img src = {singPost.postDetails.img}/>}
                {singPost.postDetails.content}
               </div>
            </section>
        </div>
    )
}