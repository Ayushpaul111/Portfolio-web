import { generateMetadata, SEOData } from './seo'
import { Metadata } from 'next'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export interface BlogPostMetadata {
  title: string
  description: string
  date: string
  tags?: string[]
  author?: string
  image?: string
}

export function generateBlogMetadata(
  slug: string,
  frontmatter: BlogPostMetadata
): Metadata {
  const seoData: SEOData = {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: [
      'Ayush Paul',
      'Blog',
      'Tech Blog',
      'Programming',
      'Web Development',
      ...(frontmatter.tags || [])
    ],
    type: 'article',
    url: `https://www.ayushpaul.dev/blog/${slug}`,
    image: frontmatter.image || 'https://www.ayushpaul.dev/Ayush.webp',
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.date,
    author: frontmatter.author || 'Ayush Paul',
    section: 'Technology'
  }

  return generateMetadata(seoData)
}

export function getBlogPosts() {
  const contentDir = path.join(process.cwd(), 'content')
  
  if (!fs.existsSync(contentDir)) {
    return []
  }
  
  const files = fs.readdirSync(contentDir)
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        slug,
        metadata: data as BlogPostMetadata,
        lastModified: fs.statSync(filePath).mtime
      }
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}

export function getBlogPost(slug: string) {
  const contentDir = path.join(process.cwd(), 'content')
  const filePath = path.join(contentDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    metadata: data as BlogPostMetadata,
    content,
    lastModified: fs.statSync(filePath).mtime
  }
}