import Link from "next/link"
export default function Header(){
  return(
    <div className="flex justify-center space-x-5">
    <div>
    <Link href="/">Home</Link>
    </div>
    <div>
    <Link href="/blog">Blog</Link>
    </div>
    <div>
    <Link href="/contact">contact</Link>
    </div>
    </div>
  )
}


