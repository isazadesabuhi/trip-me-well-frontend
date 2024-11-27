import Markdown from "markdown-to-jsx"
import getBlogMetadata from "@/utils/getBlogMetadata";
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"

function getBlogContent(slug) {
    const folder = 'blogs/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const blogs = getBlogMetadata('blogs')
    return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params, searchParams }) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `The Bubbly Baker ${id.replaceAll('_', ' ')}`
    }
}

export default function RecipePage(props) {

    const slug = props.params.slug
    const blog = getBlogContent(slug)
    return (
        <main>
            <article>
                <Markdown>{blog.content}</Markdown>
            </article>
        </main>
    )
}