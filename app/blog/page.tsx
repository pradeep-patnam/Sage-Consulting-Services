import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Consulting in 2024",
      excerpt: "Exploring emerging trends and technologies shaping the consulting industry.",
      date: "March 1, 2024",
      category: "Industry Trends",
    },
    {
      title: "Strategic Planning for Small Businesses",
      excerpt: "Essential tips for developing effective business strategies.",
      date: "February 28, 2024",
      category: "Strategy",
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Case studies of successful digital transformation initiatives.",
      date: "February 25, 2024",
      category: "Digital",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Blog & Insights
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Latest articles and insights from our consulting experts
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} className="cursor-pointer hover:bg-muted">
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground">{post.category}</div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 text-sm text-muted-foreground">{post.date}</div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

