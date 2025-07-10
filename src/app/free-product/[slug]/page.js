import { freeProducts } from '@/app/freePoructData'
import React from 'react'
// import { slugify } from '@/app/slugify'
import { slugify } from '@/app/slugify'
import FreeProductDetail from '@/app/component/FreeProductDetail'

export const generateStaticParams=()=>{
    return freeProducts.map((elm)=>({
        slug:slugify(elm.title)
    }))
}

export default function page({params:{slug}}) {

    const singleProduct=freeProducts.find((elm)=>slugify(elm.title)==slug)

  return (
    <div>
        <FreeProductDetail singleProduct={singleProduct}/>
    </div>
  )
}
