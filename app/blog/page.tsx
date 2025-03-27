import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsPage() {
  const posts = [
    {
      title: "UK Strengthens Diplomatic Ties with Southeast Asian Nations",
      excerpt: "New diplomatic initiatives aim to enhance cooperation on trade, security, and climate change.",
      date: "March 1, 2024",
      category: "Diplomatic Relations",
    },
    {
      title: "Travel Advisory Update: Important Information for UK Citizens",
      excerpt: "Updated travel guidance for regions affected by recent developments.",
      date: "February 28, 2024",
      category: "Travel Advice",
    },
    {
      title: "UK Leads International Humanitarian Response",
      excerpt: "Coordinated efforts to provide aid and support to regions in crisis.",
      date: "February 25, 2024",
      category: "Humanitarian",
    },
  ]

  return (
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  News & Updates
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Latest news and updates from the UK Foreign and Commonwealth Office
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

