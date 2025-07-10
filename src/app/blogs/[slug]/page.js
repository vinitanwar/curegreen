import React from 'react'
import { blogData } from '@/app/blogData'
import { slugify } from '@/app/slugify'
import BlogDetail from '@/app/component/BlogDetail'

export const generateStaticParams =  () => {
  return blogData.map((blog) => ({
    slug: slugify(blog.title),
  }))
}

export default function page({params:{slug}}) {
  const singleBlog=blogData.find((blog)=>slugify(blog.title)===slug)
  return (
    <div>
        <BlogDetail singleBlog={singleBlog}/>
    </div>
  )
}
