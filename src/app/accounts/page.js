import Link from "next/link"
import { redirect } from "next/navigation";


export default function Accounts(){
     const profileInfo = null;
     
     if (profileInfo===null) redirect('products?search=product123');
          
     


     return (

     <div>
          <h2>accounts page is here</h2>
          <Link href={'products'} >Navigate to product page</Link>
     </div>
     )
};
 