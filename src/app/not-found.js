import Link from "next/link";


export default function NotFound(){
    return <div>
         <h2>this page does not exits</h2>
         <Link href={"/"} >please return to the home page</Link>
           </div>
}