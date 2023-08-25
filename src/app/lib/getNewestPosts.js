export default async function getNewestPost(){
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

    if(!res.ok){
        throw new Error('Erro fetching posts')
    }

    return res.json();
}