import { generateStructuredData, SEOData } from '@/lib/seo'

interface StructuredDataProps {
  data?: SEOData
}

export default function StructuredData({ data }: StructuredDataProps) {
  const structuredData = generateStructuredData(data)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}