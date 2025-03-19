
'use client'

import { usePathname, useSearchParams } from "next/navigation"


export default function Cart(){
   
    const pathName = usePathname();
    console.log(pathName)

    const searchParam = useSearchParams();
    console.log(searchParam.get('search'), searchParam.get('randomvalue'))
    console.log("hii there")

    return <div>
        <h2>this is cart page</h2>
    </div>
}