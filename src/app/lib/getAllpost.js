export default async function getAllPosts(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`);

    if(!res.ok){
        throw new Error('Erro fetching posts')
    }

    return res.json();
}