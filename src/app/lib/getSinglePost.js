export default async function getPostList(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if(!res.ok){
        throw new Error('Erro fetching posts')
    }

    return res.json();
}