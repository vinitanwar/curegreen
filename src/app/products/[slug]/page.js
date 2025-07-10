import React from 'react'
import { products } from '@/app/productData'
import ProductInner from '@/app/component/ProductInner';


export async function generateStaticParams() {
    return products.map((product) => ({
      slug: product.title.toLowerCase().split(" ").join("-"),      
    }));
  }



export default function page({params:{slug}}) {
    const product = products.find((elm) => elm.title.toLowerCase().split(" ").join("-") === slug);

    
  if (!product) {
    return <p>Product not found.</p>;
  }
  
  return (
    <div>
        <ProductInner product={product} />
    </div>
  )
}
