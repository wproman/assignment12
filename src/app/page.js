import getNewestPost from "./lib/getNewestPosts"
import Link from "next/link";

export default async function Home() {
    const newPosts = await getNewestPost();

    return (
        <div className="container mx-auto">
            <div className="mt-5 grid grid-cols-2 gap-4">
                {newPosts.map((post) => (
                    <div key={post.id} className="bg-gray-100 p-4">
                    <Link href={`/single-blog/${post.id}`}>
                      <img src = {post.img}/>
                        <p>{post.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


